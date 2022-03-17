import express from 'express';
import 'dotenv/config';
import { Router } from "express";
import multer from 'multer';
import { greeting, parseFile } from './handlers';

const upload = multer({dest: process.env.FileDirectory || 'uploads'});
const app = express();
const port = process.env.Port || 3000;

app.get('/', greeting);

app.post('/parse', upload.single('parseTarget'), parseFile);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


export default app;