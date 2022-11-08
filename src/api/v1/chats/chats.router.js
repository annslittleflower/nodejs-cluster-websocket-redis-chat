const express = require('express');

const ChatsController = require('./chats.controller');

const router = express.Router();

router.post('/', ChatsController.createChat);
router.get('/', ChatsController.getUserChats);
router.patch('/:id', ChatsController.updateChat);
router.delete('/:id', ChatsController.deleteChat);

module.exports = router;
