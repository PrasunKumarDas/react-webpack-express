const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Api Router');
});

router.get('/prasun', (req,res) => {
    res.send('Api Router11');
});

module.exports = router;