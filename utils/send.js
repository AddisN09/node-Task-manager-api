function send(res,statusCode,body){
    res.statusCode=statusCode;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(body,null,2));
    return true;
}
module.exports={send};