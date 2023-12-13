const express = require('express');
const router = express.Router();
const {randomNumGen} = require('../controllers/test')

// Creating the first routing API Endpoint
router.get("/random", randomNumGen)


module.exports = router