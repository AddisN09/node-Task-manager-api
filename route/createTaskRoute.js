const {createTaskController}=require('../controller/createTaskController.js');
const {requireAuth}=require('../middleware/requireAuth.js');
const {requireRole}=require('../middleware/requireRole.js');
const {body}=require('../middleware/body.js');

async function createTaskRoute(req,res){
    if(req.url==='/task' && req.method==='POST'){
        if(await requireAuth(req,res))return true;
        if(await requireRole(req,res))return true;
        if(await body(req,res))return true;

        await createTaskController(req,res);
    }
    return false;
}

module.exports={createTaskRoute};