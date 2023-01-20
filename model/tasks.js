const db = require('../database/db');

const insert_task = db.prepare('INSERT INTO tasks (content) VALUES (?)');

function createTask(content) {
    insert_task.run(content);
}

createTask('This is a test task');
const tasks = db.prepare('SELECT * FROM tasks').all();
console.log(tasks);

module.exports = { createTask };
