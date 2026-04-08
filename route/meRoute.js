const {meController}=require('../controller/meController.js');
const {requireAuth}=require('../middleware/requireAuth.js');
async function meRoute(req,res){
    if(req.url==='/login/me' && req.method==='GET'){
        if(!await requireAuth(req,res))return true;
        return await meController(req,res);
    }
    return false;
}
module.exports={meRoute};