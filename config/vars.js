import dotenv from 'dotenv';
dotenv.config(); // для доступа connectToMongo к .env

export        const DB_NAME = process.env.DB_NAME        || 'admin';
export        const DB_USER = process.env.DB_USER        || 'root';
export    const DB_PASSWORD = process.env.DB_PASSWORD    || 'example';
export        const DB_HOST = process.env.DB_HOST        || 'localhost';
export        const DB_PORT = process.env.DB_PORT        || 27017;
export    const SERVER_PORT = process.env.SERVER_PORT    || 5000;
export    const SERVER_HOST = process.env.SERVER_HOST    || 'localhost';
export const MINUTES_UPDATE = process.env.MINUTES_UPDATE || 1;
export         const ORIGIN = process.env.ORIGIN         || 'http://localhost:3000';