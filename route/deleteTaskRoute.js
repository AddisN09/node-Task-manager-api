const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {routeParameters}=require('../middleware/routParameters.js');

async function deleteTaskRoute(req,res){
     let pathParts=req.url.split('/');
    if(pathParts[1]==='task' && pathParts.length===3 && req.method==='DELETE'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;
        if(await routeParameters(req,res,'taskId'))return true;

        return await deleteTaskController(req,res);
    }
    return false;
}

module.exports={deleteTaskRoute};