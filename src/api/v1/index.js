const express = require('express');
const MessagesRouter = require('./messages/messages.router');
const ChatsRouter = require('./chats/chats.router');

const router = express.Router();

router.use('/messages', MessagesRouter);
router.use('/chats', ChatsRouter);

module.exports = router;
