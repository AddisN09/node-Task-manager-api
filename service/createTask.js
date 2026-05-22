const { readFileContent, writeFileContent } = require('../utils/dataAcces.js');
const { taskModel } = require('../models/taskModel.js');
const path = require('path');
const { TMError } = require('../Errors/TMError.js');

const filePath = path.join(__dirname, '../data/task.json');
const userFilePath=path.join(__dirname, '../data/user.json');

async function createTask(taskObject) {
    const { title, description, userId, status, dueDate, complited } = taskObject;

    const users=await readFileContent(userFilePath);
    const user=users.find(user=>user.userId===userId);
    if(!user){
        throw new TMError(`The inserted userId ${userId}, is not valid`,400);
    }

    const tasks = await readFileContent(filePath);
    
    const newTask = await taskModel(title, description, userId, status, dueDate, complited);
    tasks.push(newTask);
    await writeFileContent(filePath, tasks);
    return newTask;
}

module.exports = { createTask };