const {readFileContent}=require('../utils/dataAcces.js');
const path=require('path');

const filePath=path.join(__dirname,`../data/task.json`);

async function getAllTasks(){
    return await readFileContent(filePath);
}

module.exports={getAllTasks};