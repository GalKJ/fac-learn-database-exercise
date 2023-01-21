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
// console.log(tasks);

const result = createTask({ content: 'Buy ergo mouse', complete: 0 });
// console.log(result);

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

const delete_task = db.prepare(/* sql */ `
  DELETE FROM tasks WHERE id = ?
`);

function removeTask(id) {
    delete_task.run(id);
}

// removeTask(1);

const update_content = db.prepare(/* sql */ `
UPDATE tasks
SET content = $content
WHERE id = $id
RETURNING id, content, created_at, complete
`);

function editTask(task) {
    return update_content.get(task);
}

// editTask({ id: 1, content: 'This is an updated task!' });

// console.log('ln43', listTasks());

const update_complete = db.prepare(/* sql */ `
UPDATE tasks
SET complete = NOT complete
WHERE id = ?
RETURNING id, content, created_at, complete
`);

function toggleTask(id) {
    return update_complete.get(id);
}

toggleTask(4);

module.exports = { createTask, removeTask, listTasks, editTask, toggleTask };
