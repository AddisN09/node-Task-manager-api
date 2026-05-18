const {URL}=require('url');
const { sendError } = require('../utils/sendError.js');
async function routeParameters(req,res,paramsName){
    const myurl=new URL(req.url,`http://${req.headers.host}`);
    let splited=myurl.pathname.split('/');
    if(!splited[2]){
       return sendError(res,{message:`There is no route parameter `,statusCode:400})
    }
    req.params={[paramsName]:splited[2]};
    return false;
}
module.exports={routeParameters}; 