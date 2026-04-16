const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {resetPasswordController}=require('../controller/resetPasswordController.js');


async function resetPasswordRoute(req,res) {
 if(req.url === '/login/user' && req.method ==='PATCH'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;

        return await resetPasswordController(req,res);
 }
    return false;
}

module.exports={resetPasswordRoute};