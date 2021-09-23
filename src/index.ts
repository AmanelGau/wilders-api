import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import wilderController from './controllers/wilderController';

const app = express();

mongoose
  .connect(
    'mongodb+srv://Amanel:Q1pmrjncpmq@cluster0.26p7i.mongodb.net/test?retryWrites=true&w=majority',
    { autoIndex: true }
  )
  .then(() => console.log('Connected to database'))
  .catch((err: any) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.post('/api/wilder/create', asyncHandler(wilderController.create));

app.get('/api/wilder/read', asyncHandler(wilderController.read));

app.put('/api/wilder/update/:id', wilderController.update);

app.delete('/api/wilder/delete/:id', wilderController.delete);

app.listen(5000, () => console.log('Server started on 5000'));
