import React, { FC } from 'react';
import './App.scss';
import Container from '@material-ui/core/Container';
import MainLayout from  './layouts/mainLayout/MainLayout';
import { connect } from 'react-redux';
import TRootState from './abstractions/types/TRootState'; 
import TRepository from './abstractions/types/TRepository';

interface IMapStateToProps {
  repositories: TRepository[],
  loaded: boolean
};

interface Props extends IMapStateToProps {};

// одна страница на все приложение
const App: FC<Props> = props => {
  return (
    <MainLayout>
      <Container>
        <div>

        </div>
      </Container>
    </MainLayout>    
  );
};

const mapStateToProps = (state: TRootState): IMapStateToProps => ({
  repositories: state.repositories.items,
  loaded: state.repositories.loaded
});

export default connect(mapStateToProps)(App);
