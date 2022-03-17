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

Port=8080
FileDirectory=uploads

For easy running here is a curl command that assumes a directory of Users\user\Documents\test.txt with a utf-8 encoding to send
```
curl --request POST \
  --url 'http://localhost:8080/parse?hierarchy=3&=' \
  --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
  --form 'parseTarget=@C:\Users\user\Documents\test.txt'
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


## Improvements
Things I'd look to do given more time.

* Improve Test Coverage: the current tests are good, but a better testing of the file upload endpoint would be far more useful. Unforutnately I haven't done a lot of Express based testing with supertest and felt it would take too long to get the test to a point worth the effort
* Modifying my alogithm for the frequencies: I know that the current method of sorting an array and slicing it works, however it's not the fastest as we have a complexity of n^2 because of iterating over the items twice once for map insertion and again for sorting. I had an attempt that would sort as the map inserted. Again due to my personal time restraints I'd rather get a completed project in your hands. 
