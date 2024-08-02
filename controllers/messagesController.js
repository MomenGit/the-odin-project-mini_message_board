const db = require('../db/queries');

exports.getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render('index', { title: 'Mini Message Board', msgs: messages });
};

exports.createMessagePost = async (req, res) => {
  const { messageUser, messageText } = req.body;
  await db.insertMessage(messageUser, messageText);
  res.redirect('/');
};
