const Blockchain = require('../dev/blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(892348, 'OANS49S4C6S18', 'OIANS909A0S9NF');

bitcoin.createNewTransaction(100, 'ALEXF46SGHRH6', 'JEN4K468KL6KK0');

bitcoin.createNewBlock(1984, '7C6A93FE7S8A2', '2S8HB9E1D1HP8');

bitcoin.createNewTransaction(50, 'ALEXF46SGHRH6', 'JEN4K468KL6KK0');
bitcoin.createNewTransaction(300, 'ALEXF46SGHRH6', 'JEN4K468KL6KK0');
bitcoin.createNewTransaction(2000, 'ALEXF46SGHRH6', 'JEN4K468KL6KK0');

bitcoin.createNewBlock(7199, 'FA44FDS4FSD9F9', '6GS9DE46S1D465');

console.log(bitcoin.chain[2]);
