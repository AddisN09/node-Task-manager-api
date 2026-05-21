const { readFileContent, writeFileContent } = require('../utils/dataAcces.js');
const { taskModel } = require('../models/taskModel.js');
const path = require('path');

const filePath = path.join(__dirname, '../data/task.json');

async function createTask(taskObject) {
    const { title, description, userId, status, dueDate, complited } = taskObject;

    const tasks = await readFileContent(filePath);
    
    const newTask = await taskModel(title, description, userId, status, dueDate, complited);
    tasks.push(newTask);
    await writeFileContent(filePath, tasks);
    return newTask;
}

module.exports = { createTask };