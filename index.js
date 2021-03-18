'use strict';

import { cpus } from 'os';
import cluster from 'cluster';
import express from 'express';

const app = express();

// общие для всех роутов middlewares
app.use(express.json());

if (cluster.isMaster) {
  // занимаем все ядра
  const cpuCount = cpus().length;
  for (let i = 0; i <= cpuCount; i++) {
    cluster.schedulingPolicy = cluster.SCHED_RR;
    cluster.fork();
  }
  // события родительского процесса
  import('./config/masterProcessEvents.js');
  // mongo
  import('./config/mongoDatabase');
} else {
  let server = app.listen(PORT, () => console.log(`Server worked on port ${PORT}, pid: ${process.pid}`));
  
  // события дочерних процессов
  process.on('uncaughtException', (error) => {
    console.error(error.message);
    console.error(error.stack);
    process.exit(1);
  });

  process.on('SIGINT', () => {
    console.log(`SIGINT ${process.pid}`);
    server.close(() => { process.exit(0) });
  });

  process.on('SIGTERM', () => {
    console.log(`SIGTERM ${process.pid}`);
    server.close(() => { process.exit(0) });
  });

  process.on('SIGUSR2', () => {
    console.log(`SIGUSR2 ${process.pid}`);
    server.close(() => { process.exit(1) });
  });
}