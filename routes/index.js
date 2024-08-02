const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

/* GET home page. */
router.get('/', messagesController.getMessages);

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Send new message' });
});

router.post('/new', messagesController.createMessagePost);

module.exports = router;
