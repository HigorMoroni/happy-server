import express from 'express';
import "reflect-metadata";

import './database/connection';

const app = express();

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333);