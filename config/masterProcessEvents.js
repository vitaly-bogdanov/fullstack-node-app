import cluster from 'cluster';

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