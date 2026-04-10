const { loginController } = require("../controller/authController");
const {requireAuth}=require('../middleware/requireAuth.js');
const { logoutController } = require("../controller/logoutController");

async function authRoute(req,res){
    if(req.method==='POST' && req.url==='/login'){
        return await loginController(req,res);
    }
    if(req.method==='POST' && req.url==='/logout'){
         if(await requireAuth(req,res))return true;
         return logoutController(req,res);
    }
    return false;
}

module.exports={authRoute};