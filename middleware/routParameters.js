const {URL}=require('url');
const { sendError } = require('../utils/sendError.js');
async function routeParameters(req,res){
    const myurl=new URL(req.url,`http://${req.headers.host}`);
    let splited=myurl.pathname.split('/');
    if(splited[1]!=='user' && !splited[2]){
        sendError(res,{message:`There is no route parameter `,statusCode:400})
    }
    req.params=splited[2];
    return false;
}
module.exports={routeParameters};