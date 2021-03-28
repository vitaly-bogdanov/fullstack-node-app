import TRepositoryState from '../../abstractions/types/TRepositoryState';
import TAction from '../../abstractions/types/TAction';
import TRepository from '../../abstractions/types/TRepository';

const initialSatate: TRepositoryState = {
  repositories: [],
  loaded: false
};

type T = "";
type P = { repositories: TRepository[] }

const RepositoriesReducer = (state: TRepositoryState = initialSatate, action: TAction<T, P>): TRepositoryState => {
  switch (action.type) {
    case "":
      return
    default: 
      return
  }
}

export default RepositoriesReducer;