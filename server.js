const express = require('express');

const model = require('./model/tasks.js');

const server = express();

server.get('/', (req, res) => {
    const tasks = model.listTasks();
    const body = /* html */ `
    <!DOCTYPE html>
    <form method="POST">
    <input id="content" name="content" aria-label="New task" required>
    <button>Add Task +</button>
    </form>
    <ul>${tasks.map((t) => `<li>${t.content}</li>`).join('')}</ul>
    `;

    res.send(body);
});

server.post('/', express.urlencoded({ extended: false }), (req, res) => {
    const task = {
        content: req.body.content,
        complete: 0,
    };
    model.createTask(task);
    res.redirect('/');
});

module.exports = server;
