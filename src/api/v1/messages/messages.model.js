const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessagesSchema = new Schema({
  text: { type: Schema.Types.String, required: true },
  authorId: { type: Schema.Types.String, required: true },
  chatId: { type: Schema.Types.String, required: true }, // host id
  imgURLs: { type: [Schema.Types.String], required: false }
}, { timestamps: true });


const Message = mongoose.model('Message', MessagesSchema);

module.exports = Message;
