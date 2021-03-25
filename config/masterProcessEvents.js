import cluster from 'cluster';
import { MINUTES_UPDATE } from './vars.js';
import { syncRepositoriesWithTransaction } from './helpers.js';

cluster.on('fork', (worker) => {
  console.log(`Worker ${worker.id} is online`);
});

cluster.on('listening', (worker, address) => {
  console.log(`Worker ${worker.process.pid} is now connected to ${JSON.stringify(address)}`);
});

cluster.on('disconnect', (worker) => {
  console.log(`Worker ${worker.process.pid} has disconnected`);
});

cluster.on('exit', (worker, code) => {
  console.log(`Worker ${worker.process.pid} is dead, code: ${code}`);
  if (code === 1) {
    cluster.fork();
  }
});

const getAndStartRepositoriesUpdater = () => {
  return setInterval(async () => {
    await syncRepositoriesWithTransaction();
    console.log('hello');
    console.log(process.pid);
  }, MINUTES_UPDATE * 60000);
}

let repositoriesUpdater = getAndStartRepositoriesUpdater();

for (const id in cluster.workers) {
  cluster.workers[id].on('message', (message) => {
    if (message === 'reset') {
      console.log('---');
      console.log('ok');
      console.log(process.pid);
      console.log('---');
      clearInterval(repositoriesUpdater); // сбрасываем счетчик
      repositoriesUpdater = getAndStartRepositoriesUpdater(); // запускаем заново
    }
  });
};

setInterval(() => {
  console.log("вот сейчас должно было сработать");
}, MINUTES_UPDATE * 60000);
