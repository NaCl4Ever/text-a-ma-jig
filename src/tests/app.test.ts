import request  from 'supertest';
import app from '../app';
import path from 'path'

describe('Test Handler Resolution', () => {
 test('Greets on /', async () => {
   const response = await request(app)
    .get('/')
    .expect(200)
 }) 
//  test('Picks up files on parse', async () => {

//     const response = await request(app)
//     .post("/parse")
//     .query({
//       hierarcy: 3
//     })
//     .attach(
//       'parseTarget',
//       path.resolve(__dirname, `./test.txt`)
//     )
//     .expect(200)
//     .expect((res)=> {
//       res.body.frequencies.length = 3,
//       res.body.frequencies[0][0] === 'id'
//     })
//  })
})