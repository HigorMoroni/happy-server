import express from 'express';
import "reflect-metadata";
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanages';

import './database/connection';

const app = express();

app.post('/users', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage); 

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  await orphanagesRepository.save(orphanage);

  return response.json(orphanage);
});

app.listen(3333);