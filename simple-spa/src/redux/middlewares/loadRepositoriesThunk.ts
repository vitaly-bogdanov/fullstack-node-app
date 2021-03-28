import { loadRepositoriesApi } from '../../config/apiMethods';
import { Dispatch } from 'redux';
import loadRepositoriesAction, { TLoadRepositoriesAction } from '../actions/loadRepositoriesAction'; 

const loadRepositoriesThunk: Function = () => (dispatch: Dispatch<TLoadRepositoriesAction>) => {
  loadRepositoriesApi((response: Response): void => {
    dispatch(loadRepositoriesAction(response));
  }, (error: any): void => {
    console.error(error);
  });
}

export default loadRepositoriesThunk;