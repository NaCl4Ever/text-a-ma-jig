import { frequencyParser } from "../util/frequency";


describe('Frequency Parser', () => {
  test('It should return a proper frequency array', () => {
    const text = 'test Test test tEsT text text parse parse persa..  possibly text parsa';
    const results = frequencyParser(text, 2);
    expect(results.length).toBe(2);
    expect(results[0][0]).toBe('test');
    expect(results[0][1]).toBe(4)
    expect(results[1][0]).toBe('text');
    expect(results[1][1]).toBe(3);
  })
  test('It should throw errors with bad inputs', () => {
     expect(() => {frequencyParser(null, null)}).toThrowError();
     expect(() => {frequencyParser('Test amount', null)}).toThrowError();
     expect(() => {frequencyParser('text test trim', 4)}).toThrowError();
  })
})