import Repository from '../models/Repository.js';
import { getTrendsRepositories } from '../config/githubApiMethods.js';

export const syncRepositoriesWithTransaction = async () => {
  const trendsRepositories = await getTrendsRepositories();
  await Repository.deleteMany({});
  const repositories = await Repository.create(trendsRepositories);
  process.send('reset');
  return repositories;
}
