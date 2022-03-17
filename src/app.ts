import express from 'express';
import multer from 'multer';
import { readFile as readFileAsync} from 'fs/promises';
import { frequencyParser } from './util/frequency';
const upload = multer({dest: 'uploads'});
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.post('/parse', upload.single('parseTarget'), (req, res) => {
  const { file } = req;
  const {hierarchy} = req.query;
  const parsedHierarchy = Number.parseInt(hierarchy.toString());
  if(file === null) {
    res.status(400).send('No files provided to parse');
  }
  
  readFileAsync(file.path, {encoding: 'utf-8'}).then((val) =>  res.json(
    { 
      "frequencies": frequencyParser(val, parsedHierarchy)
    }));
  
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});