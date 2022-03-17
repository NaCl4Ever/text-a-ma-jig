
export const frequencyParser = (text: string, amount: number) => {
  if(!text || !amount) 
  {
    throw new Error('Please provide a valid text to parse with a numeric for the amount of frequencies.')
  }

  let freqLookup = new Map();
  //There may be a better to do all this processing to get just the words that speeds up the process
  let terms: string[] = text
  .replace(/[^a-zA-Z0-9_]/g, ' ')
  .split(" ")
  .filter(t => t.length !== 0)
  .map(t => t.toLowerCase())

  if(amount > new Set(terms).size)
  {
    throw new Error('Amount can not exceed the number of unique terms.');
  }
  
  for(const term of terms) {
    freqLookup.set(term, freqLookup.has(term) ? freqLookup.get(term) + 1 : 1);
  }

  //Preferably get these sorted as we put them in hash map for speed
  return [...freqLookup.entries()].sort((a, b) =>  b[1] - a[1]).slice(0, amount);
}