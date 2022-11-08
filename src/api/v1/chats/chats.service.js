const ChatsModel = require('./chats.model');
const MessagesModel = require('../messages/messages.model');

module.exports.getUserChats = async (userId) => {
  try {
    const chats = await ChatsModel.find({participantsIds: userId}).exec();
    return chats;
  } catch (e) {
    throw Error('Error getting user chats');
  }
};

module.exports.createChat = async (body) => {
  try {
    const chat = await ChatsModel.create(body);
    return chat;
  } catch (e) {
    throw Error('Error creating chat');
  }
};

module.exports.updateChat = async (_id, body) => {
  try {
    const chat = await ChatsModel.findOneAndUpdate({_id}, body, { new: true }).exec();
    return chat;
  } catch (e) {
    throw Error('Error creating chat');
  }
};

module.exports.deleteChat = async (_id) => {
  try {
    const chat = await ChatsModel.deleteOne({ _id }).exec();
    return chat;
  } catch (e) {
    throw Error('Error deleting chat');
  }
};
