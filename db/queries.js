const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query(" SELECT * FROM messages;");
    return rows;
}

async function newMessage(username, text) {
    await pool.query('INSERT INTO messages (username, text) VALUES ($1, $2)', [username, text]);
}

async function detailedMessage(messageIndex) {
    // console.log('in queries', messageIndex);
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [messageIndex])
    // console.log('result', rows);
    return rows;
}

module.exports = { getAllMessages, newMessage, detailedMessage }