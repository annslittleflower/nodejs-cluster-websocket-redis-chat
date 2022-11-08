const MessageService = require('./messages.service');

module.exports.postMessage = async (req, res) => {
  const { text, authorId, chatId } = req.body;

  try {
    const message = await MessageService.postMessage({text, authorId, chatId});

    // req.app.get("socketService").emiter('message-to-chat', 'hello');

    return res.status(200).json({ data: {message}, err: null });
  } catch (e) {
    return res.status(400).json({ data: null, err: e.message });
  }
};

module.exports.getChatMessages = async (req, res) => {
  const {chatId, limit, offset} = req.query;

  try {
    const messages = await MessageService.getChatMessages({chatId, limit: Number(limit), offset: Number(offset)});
    return res.status(200).json({ data: {messages}, err: null });
  } catch (e) {
    return res.status(400).json({ data: null, err: e.message });
  }
};

module.exports.updateSingleMessage = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text) {
    return res.status(422).json({ data: null, err: "Validation error!" });
  }

  try {
    const message = await MessageService.updateSingleMessage(id, {text});
    return res.status(200).json({ data: {message}, err: null });
  } catch (e) {
    return res.status(400).json({ data: null, err: e.message });
  }
};

module.exports.deleteSingleMessage = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await MessageService.deleteSingleMessage(id);
    return res.status(200).json({ data: {message}, err: null });
  } catch (e) {
    return res.status(400).json({ data: null, err: e.message });
  }
};
