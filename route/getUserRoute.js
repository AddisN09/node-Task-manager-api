const url=require('url');
const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const { getUserController } = require('../controller/getUserController');
const { routeParameters } = require('../middleware/routParameters.js');
const path = require('path');
async function getUserRoute(req,res){
     let pathParts=req.url.split('/');
    if(pathParts[1]==='user' && pathParts.length===3 && req.method ==='GET'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;
        if(await routeParameters(req,res,'userId'))return true;

        return getUserController(req,res);
    }
    return false;
}

module.exports={getUserRoute};