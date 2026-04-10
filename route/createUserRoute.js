const {createUserController}=require('../controller/createUserController.js');
const { requireAuth } = require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');

async function createUserRoute(req,res){
    if(req.url==='/login/user' && req.method==='POST'){
        if(await requireAuth(req,res))return true;

        if(await requireRole(req,res))return true;

        return await createUserController(req,res);
    }
    return false;
}

module.exports={createUserRoute};