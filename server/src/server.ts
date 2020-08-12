import express, { request } from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
   return response.json()
})

app.listen(3333);