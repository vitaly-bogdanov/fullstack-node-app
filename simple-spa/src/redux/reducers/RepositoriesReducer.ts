import TRepositoriesState from '../../abstractions/types/TRepositoriesState';
import TAction from '../../abstractions/types/TAction';
import TRepository from '../../abstractions/types/TRepository';
import { REPOSITORIES_LOAD } from '../actionNames';
import { TRepositoriesLoad, TRepositoriesClear } from '../actionTypes';

const initialSatate: TRepositoriesState = {
  items: [],
  loaded: false
};

type T = TRepositoriesLoad | TRepositoriesClear; // TSomeType1 | TSomeType2 ...

const RepositoriesReducer = (state: TRepositoriesState = initialSatate, action: TAction<T, TRepository[]>): TRepositoriesState => {
  switch (action.type) {
    case REPOSITORIES_LOAD:
      return {
        items: action.payload,
        loaded: true
      };

    default: 
      return state;
  }
}

export default RepositoriesReducer;