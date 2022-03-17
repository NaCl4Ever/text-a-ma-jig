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

If you'd like you can add a .env to configure both the port and the file directory where the server will hold a temp file while it processes it. As an example here. This will set the server to launch at port 8080 and use the uploads name for the file directory 
```
Port=8080
FileDirectory=uploads
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





