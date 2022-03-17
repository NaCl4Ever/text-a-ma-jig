export const frequencyParser = (text, hierarchy) => {
  let freq = [];
  let freqLookup = new Map();
  let terms: String = text.replace(/(\r\n|\n|\r)/gm," ")
  .split(" ")
  terms = terms.map(t => t.toLowerCase()).sort()
  for(const term of terms) {
    freqLookup.set(term, freqLookup.has(term) ? freqLookup.get(term) + 1 : 1);
    
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

  return freq;
}