const Database = require('better-sqlite3');

const db = new Database(process.env.DB_FILE);
console.log('db.jsln4', db);

const select_date = db.prepare('SELECT DATE()');
console.log('db.jsln7', select_date);
