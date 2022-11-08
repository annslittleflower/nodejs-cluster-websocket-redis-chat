const ChatsService = require('./chats.service');
const MessagesService = require('../messages/messages.service');

module.exports.getUserChats = async (req, res) => {
  const { userId } = req.query;

  try {
    const chats = await ChatsService.getUserChats(userId);
    return res.status(200).json({ data: {chats}, err: null });
  } catch (e) {
    return res.status(400).json({ data: null, err: e.message });
  }
};

module.exports.createChat = async (req, res) => {
  const { participantsIds, title, chatCreatorId } = req.body;

  try {
    const chat = await ChatsService.createChat({participantsIds, title, chatCreatorId});
    return res.status(200).json({ data: {chat}, err: null });
  } catch (e) {
    return res.status(400).json({ data: null, err: e.message });
  }
};

module.exports.updateChat = async (req, res) => {
  const { id } = req.params;

  const { title, participantsIds } = req.body;

  const updateObj = {};

  if (title) {
    updateObj.title = title;
  }

  if (participantsIds) {
    updateObj.participantsIds = participantsIds;
  }

  if (!Object.keys(updateObj).length) {
    return res.status(422).json({ data: null, err: "Validation error!" });
  }

  try {
    const chat = await ChatsService.updateChat(id, updateObj);
    return res.status(200).json({ data: {chat}, err: null });
  } catch (e) {
    return res.status(400).json({ data: null, err: e.message });
  }
};

module.exports.deleteChat = async (req, res) => {
  const { id } = req.params;

  try {
    const chat = await ChatsService.deleteChat(id);
    const messages = await MessagesService.deleteChatMessages(id);
    return res.status(200).json({ data: {chat, messages}, err: null });
  } catch (e) {
    return res.status(400).json({ data: null, err: e.message });
  }
};
