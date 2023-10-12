import express, { Application } from 'express';
import { Client } from 'pg';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from './routes/index';

dotenv.config();


// Setting up port
const PORT = process.env.PORT || 5000;

const Connection = new Client({
  host: 'localhost',
  user: 'hadiqasumbalarshad',
  password: '11223344',
  port: 5432,
  database: 'chatapp-ts',
});

Connection.connect()
  .then(() => {
    console.log('Connected to database');

    // Now, start your Express.js server
    const app: Application = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(express.json()); // to accept JSON data

    // Define your routes
    app.use(router);

    

    // Listening to server connection
    app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
  })
  .catch((error) => {
    console.log('Oops, cant connect', error);
  });
