const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid').v1;

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.`})
});

app.get('/mine', function (req, res) {

    // Retrieveing the hash of the previous block
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    // Generating the nonce between the two blocks    
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    }
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    // Generating the hash of the current block
    const currentBlockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    // Making a reward of 12.5 bitcoins for the mininng
    bitcoin.createNewTransaction(12.5, "00", nodeAddress);


    // Finally, submitting the new block into the blockchain
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, currentBlockHash);

    res.json({
        note: 'New node block mined succesfully',
        block: newBlock
    })
});
    
app.listen(port, function(){
    console.log('Listening on port ' + port);
});