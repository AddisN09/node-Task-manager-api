const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {resetPasswordController}=require('../controller/resetPasswordController.js');
const { routeParameters } = require('../middleware/routParameters.js');


async function resetPasswordRoute(req,res) {
       let pathParts=req.url.split('/');
 if(pathParts[1]==='user' && pathParts.length===3 && req.method ==='PATCH'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;
        if(await routeParameters(req,res,'userId'))return true;

        return await resetPasswordController(req,res);
 }
    return false;
}

module.exports={resetPasswordRoute};