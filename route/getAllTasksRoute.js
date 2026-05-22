const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {getAllTasksController}=require('../controller/getAllTasksControlle.js');


async function getAllTasksRoute(req,res){
    if(req.url==='/tasks' && req.method==='GET'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;

        return getAllTasksController(req,res);
    }
    return false;
}

module.exports={getAllTasksRoute};