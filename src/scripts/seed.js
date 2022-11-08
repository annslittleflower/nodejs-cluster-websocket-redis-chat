const mongoose = require('mongoose');

require('../config/db');

const generateId = mongoose.Types.ObjectId;

const Chats = require('../api/v1/chats/chats.model');
const Messages = require('../api/v1/messages/messages.model');

const testParticipants = [generateId(), generateId(), generateId()];

const testChats = [
  { title: 'chat 1', participantsIds: [testParticipants[0], testParticipants[1]] },
  { title: 'chat 2', participantsIds: [testParticipants[0], testParticipants[2]] },
];

(async () => {
  try {
    await Chats.deleteMany({});
    await Messages.deleteMany({});

    const chats = await Chats.create(testChats);

    await Messages.create([
      {
        _id: generateId(),
        text: 'First message first chat',
        authorId: testParticipants[0],
        chatId: chats[0]._id,
      },
      {
        _id: generateId(),
        text: 'Second message first chat',
        authorId: testParticipants[1],
        chatId: chats[0]._id,
      },
      {
        _id: generateId(),
        text: 'First message second chat',
        authorId: testParticipants[2],
        chatId: chats[1]._id,
      },
      {
        _id: generateId(),
        text: 'Second message second chat',
        authorId: testParticipants[0],
        chatId: chats[1]._id,
      }
    ]);
  } catch (e) {
    console.log(e);
  } finally {
    mongoose.connection.close();
  }
})();
