## First part: Building a blockchain

To start the tests
$ node tests/blockchain.js
or
$ node tests/hash.js
or
$ node tests/proof-of-work.js
or
$ node tests/genesis-block.js

## Second part: Accessing the blockchain through an API

To start the express server
$ node dev/api.js

To start the express server and allow it to automatically restart with nodemon
$ npm start

For easyness to read json retrieved by the browser, if you are using Chrome you can use the extension called "JSON Formatter"

In order to test the API, run the server with $ npm start and then use Postman by importing the collection "blockchain.postman_collection.json" in the "/tests" folder