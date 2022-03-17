import express from 'express';
import multer from 'multer';
import { readFile as readFileAsync} from 'fs/promises';
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
  let freq = [];
  let freqLookup = new Map();
  readFileAsync(file.path, {encoding: 'utf-8'}).then((val) => {
    const terms = val.split(" ")
    
    for(const term of terms) {
        freqLookup.set(term, freqLookup.has(term) ? freqLookup.get(term) + 1 : 1);
        
        if(freq.length < parsedHierarchy-1) {
          freq.push({word: term, count: freqLookup.get(term)});
        }
        else {
          for(var x = 0; x < freq.length; x++) {
            if(freq[x].count < freqLookup.get(term))
            {
              freq.splice(x, 1, 
                {
                word: term, 
                count: freqLookup.get(term)
              })
              break;
            }
          }
        }


    } 
    res.json({
      "frequencies": freq
    })
  });
  
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});