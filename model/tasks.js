const db = require('../database/db');

const insert_task = db.prepare(/* sql */ `
    INSERT INTO tasks (content, complete) 
    VALUES ($content, $complete)
    RETURNING id, content, created_at
`);

function createTask(task) {
    return insert_task.get(task);
}

createTask({ content: 'This is a test task!', complete: 0 });
const tasks = db.prepare('SELECT * FROM tasks').all();
console.log(tasks);

const result = createTask({ content: 'Buy ergo mouse', complete: 0 });
console.log(result);

const select_tasks = db.prepare(/* sql */ `
    SELECT
    id,
    content,
    TIME(created_at) AS created_at,
    complete
    FROM tasks
`);

function listTasks() {
    return select_tasks.all();
}

console.log('ln28', listTasks());

const delete_task = db.prepare(/* sql */ `
  DELETE FROM tasks WHERE id = ?
`);

function removeTask(id) {
    delete_task.run(id);
}

removeTask(1);

module.exports = { createTask };
