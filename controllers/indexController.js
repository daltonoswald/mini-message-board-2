const asyncHandler = require('express-async-handler');
const { messages } = require('../data/data')

const index = asyncHandler(async (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

const newMessage = asyncHandler(async (req, res) => {
    messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
    res.redirect('/');
})

const detailedMessage = asyncHandler(async (req, res) => {
    const messageIndex = Number(req.params.index);
    res.render('detailedMessage', { title: 'Message', messages: messages[messageIndex] })
})

module.exports = { index, newMessage, detailedMessage }