const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {userActivityController}=require('../controller/userActivityController.js');


async function userActivityRoute(req,res) {
 if(req.url === '/user/activity' && req.method ==='PATCH'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;

        return await userActivityController(req,res);
 }
    return false;
}

module.exports={userActivityRoute};