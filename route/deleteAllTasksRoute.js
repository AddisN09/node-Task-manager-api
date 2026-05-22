const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {deleteAllTasksController}=require('../controller/deleteAllTasksController.js');

async function deleteAllTasksRoute(req,res){
    if(req.url==='/tasks' && req.method==='DELETE'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;

        return await deleteAllTasksController(req,res);
    }
    return false;
}

module.exports={deleteAllTasksRoute};