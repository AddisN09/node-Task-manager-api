function sendError(res,error){
    res.statusCode=error.statusCode;
    res.end(JSON.stringify({success:false,statusCode:res.statusCode||500,message:error.message||`Internal server error`},null,2));
   return true;
}
module.exports={sendError};