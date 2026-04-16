const {URL}=require('url');
const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const { queryParser } = require('../middleware/queryParser.js');
const { deleteUserController } = require('../controller/deleteUserController.js');

async function deleteUserRoute(req,res){
    const userURL=new URL(req.url,`http://${req.headers.host}`);
    const pathname=userURL.pathname;
    if(pathname==='/login/user' && req.method==='DELETE'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;
        if(await queryParser(req,res))return true;

        return await deleteUserController(req,res);
    }
}

module.exports={deleteUserRoute};