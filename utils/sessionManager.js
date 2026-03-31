const crypto=require('crypto');
const path=require('path');
const { readFileContent, writeFileContent }=require('./dataAcces.js');
const {decryptData }=require('./encrypt-decrypt.js');

const filePath=path.join(__dirname,'../data/session.json');

async function createSession(userId,role){
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

async function getSession(sessionId){
        const sessions=await readFileContent(filePath);
        return sessions[sessionId];
}

module.exports={createSession, getSession};