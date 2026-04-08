const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');
const {createUser}=require('../service/createUser.js');
const {bodyParser}=require('../middleware/bodyParser.js');
const { decryptData } = require('../utils/encrypt-decrypt.js');

async function createUserController(req,res){
    try{
    const body=await bodyParser(req);
    const newUser=await createUser(body.username,body.password,body.role);
    return send(res,201,{message:`user successfully created`,
        username:await decryptData(newUser.username.data,newUser.username.iv),
        role:await decryptData(newUser.role.data,newUser.role.iv)});
    }
    catch(err){
       sendError(res,err);
    }

}
module.exports={createUserController};