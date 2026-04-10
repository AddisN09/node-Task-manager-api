const { TMError } = require('../Errors/TMError.js');
const {readFileContent,writeFileContent}=require('../utils/dataAcces.js');
const path=require('path');

const filePath=path.join(__dirname,'../data/session.json');

async function logout(sessionId){
    const sessions=await readFileContent(filePath);
    for(let key in sessions){
          if(key===sessionId){
            delete sessions[key];
            await writeFileContent(filePath,sessions);
            return true;
          }
    }
    throw new TMError(`there is no session`,400);
}

module.exports={logout};