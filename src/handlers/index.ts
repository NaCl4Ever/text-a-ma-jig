
import { readFile as readFileAsync, unlink} from 'fs/promises';
import { frequencyParser } from '../util/frequency';


export const greeting = (req, res) => {
  res.send('Server is running');
}

export const parseFile = async (req, res) => {
  const { file } = req;
  const {hierarchy} = req.query;
  const parsedHierarchy = Number.parseInt(hierarchy.toString());
  if(file === null) {
    res.status(400).send('No files provided to parse');
  }
  
  const response = await readFileAsync(file.path, {encoding: 'utf-8'})

  await unlink(file.path);
  res.json({ 
    "frequencies": frequencyParser(response, parsedHierarchy)
  })
}