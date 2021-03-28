import TAction from '../../abstractions/types/TAction';
import { REPOSITORIES_LOAD } from '../actionNames';
import { TRepositoriesLoad } from '../actionTypes';
import TRepository from '../../abstractions/types/TRepository';

export type TLoadRepositoriesAction = TAction<TRepositoriesLoad, TRepository[]>

const loadRepositoriesAction: Function = (repositories: TRepository[]): TLoadRepositoriesAction => ({
  type: REPOSITORIES_LOAD,
  payload: repositories
});

export default loadRepositoriesAction;