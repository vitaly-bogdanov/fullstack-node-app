import TRepository from './TRepository';

type TRepositoryState = {
  repositories: TRepository[],
  loaded: boolean
}

export default TRepositoryState;