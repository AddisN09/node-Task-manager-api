const {send }=require('../utils/send.js');
const {login}=require('../service/loginauth.js');
const {sendError}=require('../utils/sendError.js');
const {bodyParser}=require('../middleware/bodyParser.js');

async function loginController(req,res){
    try{
        const body=await bodyParser(req);
        const result=await login(body.username,body.password);
        res.setHeader(`set-cookie`,`sessionId=${result.session}; HttpOnly`);
        return send(res,200,{message:`Login as ${body.username}`});
    }
    catch(err){
       sendError(res,err);
    }
}

module.exports={loginController};