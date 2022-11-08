const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChatsSchema = new Schema({
  title: { type: Schema.Types.String, required: true },
  chatCreatorId: { type: Schema.Types.String, required: true },
  participantsIds: { type: [Schema.Types.String], required: true }
}, { timestamps: true });

const Chat = mongoose.model('Chat', ChatsSchema);

module.exports = Chat;
