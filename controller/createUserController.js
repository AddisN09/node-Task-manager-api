const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');
const {createUser}=require('../service/createUser.js');
const {bodyParser}=require('../middleware/bodyParser.js');
 
async function createUserController(req,res){
    try{
    const body=await bodyParser(req);
    const newUser=await createUser(body.username,body.password,body.role);
    return send(res,201,{message:`user successfully created`,username:newUser.username,role:newUser.role});
    }
    catch(err){
       return sendError(res,err);
    }

}
module.exports={createUserController};