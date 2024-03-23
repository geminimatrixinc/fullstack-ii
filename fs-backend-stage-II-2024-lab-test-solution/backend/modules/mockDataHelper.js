const { faker } = require('@faker-js/faker');
const CryptoJS = require('crypto-js');

const getRandomNumber = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createEthereumNumber = () => {
    return faker.finance.ethereumAddress();
};

const createCryptoHash = (hashMessage) => {
    return CryptoJS.SHA256(`${hashMessage}${Date.now()}`).toString();
};

const getMockEthereumBlocks = (blockNum = 10) => {
    const ethereumBlocks = [];
    for (var i = 0; i < blockNum; i++) {
        ethereumBlocks.push({
            address: createEthereumNumber(),
            balance: getRandomNumber(1, 1000),
            gasUsed: getRandomNumber(1, 5000),
            transactionCount: getRandomNumber(1, 1000),
        });
    }
    return ethereumBlocks;
};

const getMockTransactions = (limit = 5) => {
    const transactions = [];
    for (var i = 0; i < limit; i++) {
        transactions.push({
            source: createEthereumNumber(),
            destination: createEthereumNumber(),
            amount: getRandomNumber(1, 15000),
            status: i % 2 === 0 ? 'Success' : 'Pending',
            gasUsed: getRandomNumber(1, 50000),
            receiptHash: createCryptoHash(createEthereumNumber()),
        });
    }
    return transactions;
};

module.exports = {
    getMockEthereumBlocks,
    getMockTransactions,
    getRandomNumber,
    createCryptoHash,
    createEthereumNumber
};
