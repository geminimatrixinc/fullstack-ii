var express = require('express');
var router = express.Router();
const { blocks } = require('../modules')

blocks.initialize();

router.get('/', function(req, res, next) {
  console.log(`route accounts route called`)
  res.send('account default route');
});


router.get('/addresses', async(req, res) => {
    const data = await blocks.getAddresses();
  res.send(data);
});

// Get a list of ethereum blocks
// router.get('/list', async (req, res) => {
//     const data = await blocks.getBlocks();
//     res.json(data);
// })

// Get block details
router.get('/details/:address', async (req, res) => {
    const data = blocks.getDetail(req.params.address)
    res.json(data);
})


module.exports = router;