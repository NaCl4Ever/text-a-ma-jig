
export const frequencyParser = (text, amount) => {
  let freqLookup = new Map();
  //There may be a better to do all this processing to get just the words that speeds up the process
  let terms: string[] = text
  .replace(/[^a-zA-Z0-9_]/g, ' ')
  .split(" ")
  .filter(t => t.length !== 0)
  .map(t => t.toLowerCase())

  for(const term of terms) {
    freqLookup.set(term, freqLookup.has(term) ? freqLookup.get(term) + 1 : 1);
  }

  //Preferably get these sorted as we put them in hash map for speed
  return [...freqLookup.entries()].sort((a, b) =>  b[1] - a[1]).slice(0, amount);

}