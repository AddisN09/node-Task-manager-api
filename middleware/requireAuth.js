const {cookieParser}=require('./cookieParser.js');
const {readFileContent}=require('../utils/dataAcces.js');
const { sendError } = require('../utils/sendError.js');
const path=require('path');

const filePath=path.join(__dirname,'../data/session.json');

async function requireAuth(req,res){
    const cookie=await cookieParser(req);
    const sessionId=cookie.sessionId;
    if(!sessionId){
        return sendError(res,{message:`You need to login first`,statusCode:401});
    }
    const sessions=await readFileContent(filePath);
    const user=sessions[sessionId];

    if(!user){
        return sendError(res,{message:`Invalid session`,statusCode:401});
    }
    req.user=user;
    return true;
}
module.exports={requireAuth};