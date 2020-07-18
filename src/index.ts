import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';

createConnection();

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Listen on port 3333');
});
