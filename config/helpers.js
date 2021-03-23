export const getAndStartRepositoriesUpdater = () => {
  return setInterval(() => {
    console.log('hello');
    console.log(process.pid);
  }, 15000)
}
