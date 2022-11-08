const MessagesModel = require('./messages.model');

module.exports.postMessage = async (body) => {
  try {
    const message = await MessagesModel.create(body);
    return message;
  } catch (e) {
    throw Error('Error posting message');
  }
};

module.exports.getChatMessages = async ({chatId, limit, offset}) => {
  try {
    const messages = await MessagesModel.find({chatId}).limit(limit).skip(offset).exec();
    return messages;
  } catch (e) {
    throw Error('Error getting chat messages');
  }
};

module.exports.deleteChatMessages = async (chatId) => {
  try {
    const messages = await MessagesModel.deleteMany({chatId});
    return messages;
  } catch (e) {
    throw Error('Error deleting chat messages');
  }
};

module.exports.deleteSingleMessage = async (_id) => {
  try {
    const chat = await MessagesModel.deleteOne({ _id }).exec();
    return chat;
  } catch (e) {
    throw Error('Error deleting message');
  }
};

module.exports.updateSingleMessage = async (_id, body) => {
  try {
    const chat = await MessagesModel.findOneAndUpdate({ _id }, body, { new: true }).exec();
    return chat;
  } catch (e) {
    throw Error('Error updating single message');
  }
};
