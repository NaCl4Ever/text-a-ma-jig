import { addinlvlorder, printlvlorder, textNode } from "./textNode";

export const frequencyParser = (text, hierarchy) => {
  let freq = [];
  let freqLookup = new Map();
  let terms: String[] = text.replace(/(\r\n|\n|\r)/gm," ")
  .split(" ")
  terms = terms.map(t => t.toLowerCase()).sort()
  var root: textNode | null = null;
  for(const term of terms) {
    freqLookup.set(term, freqLookup.has(term) ? freqLookup.get(term) + 1 : 1);
    root = addinlvlorder(root, term);
    if(freq.length < hierarchy-1) {
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

  printlvlorder(root)
  return freq;
}