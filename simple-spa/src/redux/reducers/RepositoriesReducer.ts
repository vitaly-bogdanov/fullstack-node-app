import TRepositoriesState from '../../abstractions/types/TRepositoriesState';
import TAction from '../../abstractions/types/TAction';
import TRepository from '../../abstractions/types/TRepository';
import { REPOSITORIES_LOAD } from '../actionNames';
import { TRepositoriesLoad } from '../actionTypes';

const initialSatate: TRepositoriesState = {
  items: [],
  loaded: false
};

type T = TRepositoriesLoad; // TSomeType1 | TSomeType2 ...
type P = TRepository[]; // TSomeType3 | TSomeType4 ...

const RepositoriesReducer = (state: TRepositoriesState = initialSatate, action: TAction<T, P>): TRepositoriesState => {
  switch (action.type) {
    case REPOSITORIES_LOAD:
      return {
        items: [],
        loaded: true
      };
    default: 
      return state;
  }
}

export default RepositoriesReducer;