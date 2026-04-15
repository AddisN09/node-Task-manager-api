const url=require('url');
const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {queryParser}=require('../middleware/queryParser.js');
const { getUserController } = require('../controller/getUserController');

async function getUserRoute(req,res){
    const userURL=new url.URL(req.url,`http:${req.headers.host}`);
    const pathname=userURL.pathname;
    if(pathname === '/login/user' && req.method ==='GET'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;
        if(await queryParser(req,res))return true;

        return getUserController(req,res);
    }
    return false;
}

module.exports={getUserRoute};