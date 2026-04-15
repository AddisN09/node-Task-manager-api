const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {deleteAllUsersController}=require('../controller/deleteAllUsersController.js');

async function deleteAllusersRoute(req,res){
    if(req.url==='/login/users' && req.method==='DELETE'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;

        return await deleteAllUsersController(req,res);
    }
    return false;
}

module.exports={deleteAllusersRoute};