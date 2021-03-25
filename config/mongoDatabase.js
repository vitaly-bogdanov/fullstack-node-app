import mongoose from 'mongoose';

import {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} from './vars.js';

const CONNECTION_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectToMongo = async () => {
  try {
    let res = await mongoose.connect(CONNECTION_URI,  {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('\n\n----------------------');
    console.error(`DB connected to worker: ${process.pid}`);
    console.log('----------------------\n\n');
  } catch (error) {
    console.log('\n\n----------------------');
    console.log(CONNECTION_URI);
    console.error(error.message);
    console.log(`Worker: ${process.pid}`);
    console.log('----------------------\n\n');
    process.exit(1);
  }
};

export default connectToMongo;