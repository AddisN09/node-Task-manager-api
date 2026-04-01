const { loginController } = require("../controller/authController");

async function authRoute(req,res){
    if(req.method==='POST' && req.url==='/login'){
        return await loginController(req,res);
    }
}

module.exports={authRoute};