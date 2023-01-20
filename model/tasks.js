const db = require('../database/db');

const insert_task = db.prepare(/* sql */ `
    INSERT INTO tasks (content, complete) 
    VALUES ($content, $complete)
    RETURNING id, content, created_at
`);

function createTask(task) {
    return insert_task.get(task);
}

createTask('This is a test task!');
const tasks = db.prepare('SELECT * FROM tasks').all();
console.log(tasks);

const result = createTask('Buy ergo mouse');
console.log(result);

module.exports = { createTask };
