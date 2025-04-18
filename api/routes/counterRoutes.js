const express = require('express');
const { getCounter, updateCounter } = require('../controllers/counterController');

const router = express.Router();

router.get('/counter', getCounter);
router.post('/counter', updateCounter);

module.exports = router;
