const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.index);

router.post('/new', indexController.newMessage);

router.get('/messages/:index', indexController.detailedMessage);

module.exports = router;