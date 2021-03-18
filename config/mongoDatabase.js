import mongoose from 'mongoose';

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

const CONNECTION_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

(async () => {
  try {
    mongoose.connect(CONNECTION_URI,  {useNewUrlParser: true});
  } catch (error) {
    console.error(error);
  }
})();
