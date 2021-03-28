'use strict';

import { cpus } from 'os';
import cluster from 'cluster';
import express from 'express';
import router from './config/router.js';
import connectToMongo from './config/mongoDatabase.js';
import logRequests from './middlewares/logRequests.js'
import cors from 'cors';
import {
  SERVER_PORT,
  ORIGIN
} from './config/vars.js';

const app = express();

// общие для всех роутов middlewares
app.use(express.json()); // парсинг
app.use(cors({ origin: ORIGIN,  methods: '*'}));
app.use(logRequests); // логирование всех запросов
app.use(router);

if (cluster.isMaster) {
  connectToMongo().then(async () => { // сединение с дб нужно для записи по таймеру, происходит оно в родительском процессе
    // события родительского процесса
    import('./config/masterProcessEvents.js'); // тут же логика таймера и не только
    // занимаем все ядра
    const cpuCount = cpus().length;
    for (let i = 0; i <= cpuCount; i++) {
      cluster.schedulingPolicy = cluster.SCHED_RR;
      cluster.fork();
    }
  });
} else {
  connectToMongo().then(async () => { // для обращения к бд с каждого родительского процесса
    app.listen(SERVER_PORT, () => {
      console.log(`Server worked on port ${SERVER_PORT}, pid: ${process.pid}`)
    });
    import('./config/childProcessEvent.js');
  });
}
