const { TMError } = require('../Errors/TMError.js');
const { readFileContent, writeFileContent } = require('../utils/dataAcces.js');
const path = require('path');

const filePath = path.join(__dirname, '../data/task.json');

async function deleteTask(taskId) {
    const tasks = await readFileContent(filePath);
    const filteredTasks = tasks.filter(task => task.taskId !== taskId);
    if (filterredTasks.length === tasks.length) {
        throw new TMError(`There is no task with taskId ${taskId}`, 404);
    }
    await writeFileContent(filePath, filteredTasks);
    return true;
}

module.exports = { deleteTask };