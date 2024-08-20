const { Client } = require('pg');
require('dotenv').config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    text VARCHAR ( 255 ),
    added TIMESTAMP default CURRENT_TIMESTAMP
    );

    INSERT INTO messages (username, text, added)
    VALUES
        ('Bryan', 'Hello', '2024-08-19'),
        ('Odin', 'Hey', '2024-08-18'),
        ('Damon', 'Hi', '2024-08-17');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();