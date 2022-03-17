
import { readFile as readFileAsync} from 'fs/promises';
import { frequencyParser } from '../util/frequency';


export const greeting = (req, res) => {
  res.send('Server is running');
}

export const parseFile = (req, res) => {
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
  
}