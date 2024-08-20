const asyncHandler = require('express-async-handler');
const db = require('../db/queries')
const { messages } = require('../db/data')

const index = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages();

    res.render("index", { title: "Mini Messageboard", messages: messages })
})

const newMessage = asyncHandler(async (req, res) => {
    // messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
    const newMessage = {
        username: req.body.username,
        text: req.body.text
    }
    const username = req.body.username;
    const text = req.body.text;

    await db.newMessage(username, text);
    res.redirect('/');
})

const detailedMessage = asyncHandler(async (req, res) => {
    const messageIndex = Number(req.params.index);

    const detailedMessage = await db.detailedMessage(messageIndex);
    res.render('detailedMessage', { title: 'Message', messages: detailedMessage[0] })
})

module.exports = { index, newMessage, detailedMessage }