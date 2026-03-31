const crypto=require('crypto');
const path=require('path');
const { readFileContent, writeFileContent }=require('./dataAcces.js');
const {decryptData }=require('./encrypt-decrypt.js');

const filePath=path.join(__dirname,'../data/session.json');

async function createSession(userId,role){
    try{
         const sessions=await readFileContent(filePath);
         for(let key in sessions){
            let session=sessions[key];    
            if(await decryptData(session.userId.data,session.userId.iv)===userId){
                return key;
            }
         }
         const sessionId=crypto.randomBytes(32).toString('hex');
         sessions[sessionId]={userId,role}
         await writeFileContent(filePath,sessions);
         return sessionId;
    }
    catch(err){
        throw new Error(`can't create a session due to ${err}`);
    }
}

async function getSession(sessionId){
    try{
        const sessions=await readFileContent(filePath);
        return sessions[sessionId];
    }
    catch(err){
        throw new Error(`There is no session ${err}`);
    }
}

module.exports={createSession, getSession};