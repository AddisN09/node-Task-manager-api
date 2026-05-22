const {writeFileContent}=require('../utils/dataAcces.js');
const path=require('path');

const filePath=path.join(__dirname,`../data/task.json`);

async function deleteAllTasks(){
    await writeFileContent(filePath,[]);
    return true;
}

module.exports={deleteAllTasks};