const {userActivity}=require('../service/userActivity.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');
const { bodyParser } = require('../middleware/bodyParser.js');

async function userActivityController(req,res){
    try{
        const result=await userActivity(req.params.userId,req.query.activity);
        return send(res,200,{message:result});
    }
    catch(err){
       return sendError(res,err);
    }
}

module.exports={userActivityController};