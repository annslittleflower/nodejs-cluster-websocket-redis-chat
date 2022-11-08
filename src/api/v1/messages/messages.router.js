const express = require('express');
const MessageController = require('./messages.controller');

const router = express.Router();

router.get('/', MessageController.getChatMessages);
router.post('/', MessageController.postMessage);
router.patch('/:id', MessageController.updateSingleMessage);
router.delete('/:id', MessageController.deleteSingleMessage);

module.exports = router;
