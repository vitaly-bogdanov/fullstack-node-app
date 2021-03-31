import apiMethod from '../../config/apiMethods';
import { Dispatch } from 'redux';
import loadRepositoriesAction from '../actions/loadRepositoriesAction'; 
import TRepository from '../../abstractions/types/TRepository';

const loadRepositoriesThunk = () => (dispatch: Dispatch) => {
  apiMethod('/repositories', 'GET', (repositories: TRepository[]): void => {
    dispatch(loadRepositoriesAction(repositories));
  }, (error: any): void => {
    console.dir(error);
  });
};

export default loadRepositoriesThunk;