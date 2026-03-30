const crypto=require('crypto');
const path=require('path');
const { readFileContent, writeFileContent }=require('./dataAcces.js');
const { findUserByUsername } = require('./findUser.js');

const filePath=path.join(__dirname,'../data/session.json');

async function createSession(username){
    try{
        const user=await findUserByUsername(username);
         const sessions=await readFileContent(filePath);
         const sessionId=crypto.randomBytes(32).toString('hex');
         sessions[sessionId]={
            userId:user.userId,
            role:user.role
         }
         await writeFileContent(filePath,sessions);
         return {sessionId,user};
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