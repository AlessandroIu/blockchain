const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'OANS49S4C6S18OIANS909A0S9NF';
const currentBlockData = [
    {
        amount: 10,
        sender: 'ALEXF46SGHRH6',
        recipient: 'JEN4K468KL6K0'
    },
    {
        amount: 50,
        sender: 'G8E4WTB60RF6E',
        recipient: 'G6RW4J406EPKO'
    },
    {
        amount: 300,
        sender: 'EJ6WE10RLK60W',
        recipient: '6D0W8486MEL6E'
    }
];

const nonce = 200;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
