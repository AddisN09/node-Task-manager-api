const {URL}=require('url');
const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const { routeParameters } = require('../middleware/routParameters.js');
const { deleteUserController } = require('../controller/deleteUserController.js');
 

async function deleteUserRoute(req,res){
    const userURL=new URL(req.url,`http://${req.headers.host}`);
    const pathname=userURL.pathname;
    if(pathname.startsWith(`/user`) && req.method==='DELETE'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;
        if(await routeParameters(req,res,'userId'))return true;

        return await deleteUserController(req,res);
    }
}

module.exports={deleteUserRoute};