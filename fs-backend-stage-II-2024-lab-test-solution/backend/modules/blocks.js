
const mockHelper = require('./mockDataHelper');

let ethereumBlocks = [];

const initialize = () => {
    ethereumBlocks = getBlocks();
}
const getBlocks =  () => {
    return ethereumBlocks && ethereumBlocks.length > 0 ? ethereumBlocks : mockHelper.getMockEthereumBlocks();
}

const getAddresses =  () => {
   const blocks = getBlocks();
   const addresses = blocks.map(x => x.address);
    console.log(`block module - getAddresses called..${addresses}`)
   return addresses;
}

const getDetail = (address) => {
    const block = ethereumBlocks.find(x => x.address === address);
    console.log(`block module - getDetail : ${JSON.stringify(block)}`)
    return block;
}

module.exports = {
    initialize,
    getAddresses,
    getBlocks,
    getDetail
}