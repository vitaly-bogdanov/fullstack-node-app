'use strict';

import { cpus } from 'os';
import cluster from 'cluster';
import express from 'express';
import router from './config/router.js';
import dotenv from 'dotenv';
import connectToMongo from './config/mongoDatabase.js';

dotenv.config(); // доступ к .env
const app = express();

const {
  SERVER_PORT
} = process.env;

// общие для всех роутов middlewares
app.use(express.json());
app.use(router);

if (cluster.isMaster) {
  // события родительского процесса
  import('./config/masterProcessEvents.js');
  // занимаем все ядра
  const cpuCount = cpus().length;
  for (let i = 0; i <= cpuCount; i++) {
    cluster.schedulingPolicy = cluster.SCHED_RR;
    cluster.fork();
  }
} else {
  connectToMongo().then(async () => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server worked on port ${SERVER_PORT}, pid: ${process.pid}`)
    });
    import('./config/childProcessEvent.js');
  })
}