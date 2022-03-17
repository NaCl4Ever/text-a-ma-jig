#Text-a-ma-jig

## Summary
A project that calcs the top x most frequent words within a text file. 

### Running the project

NPM

```
npm i
~Installing bits and bobs~
npm start
Server listening on https://localhost:3000
```

YARN

```
yarn
~Installing bits and bobs~
yarn start
Server listening on https://localhost:3000
```

## Endpoints
```
/
```
Params: 
  * None

Returns(String)

Description: 
  Simple get to determine if server is running

```
/parse?hierarchy
```
Params: 

Hierarchy(integer): number of top frequency spots to collect for

Returns(json):

{
  "frequencies": [
        {
            "word": String,
            "count": Integer
        }
  ]
}


