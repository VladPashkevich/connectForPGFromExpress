import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDb } from './repository/db';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const startApp = async () => {
  await connectDb();
  console.log('db connect');
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
startApp();
