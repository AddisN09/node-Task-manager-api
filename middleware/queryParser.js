const url=require('url');
const { sendError } = require('../utils/sendError');


async function queryParser(req,res){
    const urlObject=new url.URL(req.url,`http://${req.headers.host}`);
    const username=urlObject.searchParams.get('username');
    if(!username){
        return sendError(res,{message:`There is no query string `,statusCode:400});
    }
    req.username=username;     
    return false;
}

module.exports={queryParser};

