const {getAllUsersController}=require('../controller/getAllusersController.js');
const { requireAuth } = require('../middleware/requireAuth.js');
const { requireRole } = require('../middleware/requireRole.js');

async function getAllusersRoute(req,res){
    if(req.url==='/login/users' && req.method === 'GET'){
    if(await requireAuth(req,res))return true;
    if(await requireRole(req,res))return true;
    return await getAllUsersController(req,res);
    }
    return false;
}
module.exports={getAllusersRoute};