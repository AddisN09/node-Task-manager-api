const {routeParameters}=require('../middleware/routParameters.js');
const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const { getTaskController } = require('../controller/getTaskController.js');

async function getTaskRoute(req,res){
    let pathParts=req.url.split('/');
    if(pathParts[1]==='task' && pathParts.length===3 && req.method==='GET'){
         if(await requireAuth(req,res))return true;
         if(await requireRole(req,res))return true;
         if(await routeParameters(req,res,'taskId'))return true;

        return await getTaskController(req,res);
    }
    return false;
}

module.exports={getTaskRoute};