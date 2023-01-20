const db = require('../database/db');

const insert_task = db.prepare(`
    INSERT INTO tasks (content) 
    VALUES (?)
    RETURNING id, content, created_at
`);

function createTask(content) {
    return insert_task.get(content);
}

createTask('This is a test task!');
const tasks = db.prepare('SELECT * FROM tasks').all();
console.log(tasks);

const result = createTask('Buy ergo mouse');
console.log(result);

module.exports = { createTask };
