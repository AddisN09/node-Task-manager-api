const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {userActivityController}=require('../controller/userActivityController.js');
const { queryParser } = require('../middleware/queryParser.js');
const { routeParameters } = require('../middleware/routParameters.js');

async function userActivityRoute(req,res) {
       let pathParts=req.url.split('/');
 if(pathParts[1]==='user' && pathParts[2]=== 'active' && pathParts.length===4 && req.method ==='PATCH'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;
        if(await routeParameters(req,res,`userId`))return true;
        if(await queryParser(req,res))return true;
        

        return await userActivityController(req,res);
 }
    return false;
}

module.exports={userActivityRoute};