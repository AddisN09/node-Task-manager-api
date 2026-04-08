const {createUserController}=require('../controller/createUserController.js');

async function createUserRoute(req,res){
    if(req.url==='/login/user' && req.method==='POST'){
        return await createUserController(req,res);
    }
    return false;
}

module.exports={createUserRoute};