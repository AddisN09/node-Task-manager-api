const url=require('url');
const { sendError } = require('../utils/sendError');


async function queryParser(req,res){
    const urlObject=new url.URL(req.url,`http://${req.headers.host}`);
    const activity=urlObject.searchParams.get('active');
    if(!activity){
        return sendError(res,{message:`There is no query string `,statusCode:400});
    }
    req.query={activity};     
    return false;
}

module.exports={queryParser};

