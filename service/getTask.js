const { TMError } = require('../Errors/TMError.js');
const { readFileContent, writeFileContent }=require('../utils/dataAcces.js');
const path=require('path');

const filePath=path.join(__dirname,'../data/task.json');

async function getTask(taskId){
    const tasks=await readFileContent(filePath);
    const task=tasks.find(task=>task.taskId===taskId);
    if(!task){
        throw new TMError(`There is no task with taskId ${taskId}`,404);
    }
    return task;
}

module.exports={getTask};