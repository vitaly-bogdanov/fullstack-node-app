import Repository from '../models/Repository.js';

export const getAndStartRepositoriesUpdater = () => {
  return setInterval(() => {
    console.log('hello');
    console.log(process.pid);
  }, 15000);
}

export const syncRepositoriesWithTransaction = (newRepositories) => {
  const session = Repository.startSession();
  const repositories = await session.withTransaction(async () => {
    await Repository.deleteMany({});
    return await Repository.create(newRepositories);
  });
  session.endSession();
  return repositories;
}
