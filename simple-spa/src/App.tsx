import React, { FC, useEffect, MouseEvent, ChangeEvent, useState } from 'react';
import classes from './App.module.scss';
import Container from '@material-ui/core/Container';
import MainLayout from  './layouts/mainLayout/MainLayout';
import { connect } from 'react-redux';
import TRootState from './abstractions/types/TRootState'; 
import TRepository from './abstractions/types/TRepository';
import loadRepositoriesThunk from './redux/middlewares/loadRepositoriesThunk';
import ButtonsPanel from './components/buttonsPanel/ButtonsPanel';
import apiMethod from './config/apiMethods';
import loadRepositoriesAction from './redux/actions/loadRepositoriesAction';
import RepositoryBox from './components/repositoryBox/RepositoryBox';
import SearchField from './components/searchField/SearchField';
import TSearchMethod from './abstractions/types/TSearchMethod';

interface IMapStateToProps {
  repositories(method: string, query: string): TRepository[],
  loaded: boolean
};

interface IMapDispatchToProps {
  loadRepositories(): void,
  updateRepositories(repositories: TRepository[]): void,
  clearRepositories(): void
}

interface Props extends IMapStateToProps, IMapDispatchToProps {};

// одна страница на все приложение
const App: FC<Props> = props => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchMethod, setSearchMethod] = useState<TSearchMethod>('id');

  useEffect(() => {
    props.loadRepositories();
  }, []);

  const inputHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const changeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value === 'id' || event.target.value === 'name') {
      setSearchMethod(event.target.value);
    }
  };

  const updateDbHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    apiMethod('/repositories/update', 'PATCH', (repositories: TRepository[]) => {
      props.updateRepositories(repositories);
    }, (error: any) => {
      console.dir(error);
    });
  };

  const clearDbHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    apiMethod('/repositories/delete', 'DELETE', (): void => {
      props.clearRepositories();
    }, (error: any): void => {
      console.dir(error);
    });
  };

  return (
    <MainLayout>
      <Container>
        <section>
          <ButtonsPanel clearDb={clearDbHandler} updateDb={updateDbHandler} />
          <SearchField change={changeHandle} input={inputHandle} searchMethod={searchMethod} searchQuery={searchQuery} />
          <div className={classes.gridRepositoryBox}>
            {
              props.repositories(searchMethod, searchQuery).map((item: TRepository) => (
                <RepositoryBox
                  key={item.id} 
                  name={item.name} 
                  homepage={item.homepage} 
                  language={item.language}
                  id={item.id}
                />
              ))
            }
          </div>
        </section>
      </Container>
    </MainLayout>
  );
};

const mapStateToProps = (state: TRootState): IMapStateToProps => ({
  repositories: (method: TSearchMethod, query: string): TRepository[] => { // для поиска по state
    return state.repositories.items.filter((item: TRepository) => {
      if (query.length > 0) {
        return item[method] == query;
      }
      return true;
    })
  },
  loaded: state.repositories.loaded
});

const mapDispatchToProps = (dispatch: any): IMapDispatchToProps => ({
  loadRepositories: () => dispatch(loadRepositoriesThunk()),
  updateRepositories: (repositories: TRepository[]) => dispatch(loadRepositoriesAction(repositories)),
  clearRepositories: () => dispatch(loadRepositoriesAction([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);