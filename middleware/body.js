const {bodyParser}=require('./bodyParser.js');
const {sendError}=require('../utils/sendError.js');

async function body(req,res){
    const content=await bodyParser(req);
    if(!content.title || !content.description || !content.userId){
        return sendError(res,{message:`you need to specify the necessary inputs`,statusCode:400});
    }
    req.bodyContent=content;
    return false;
}

module.exports={body};