require('dotenv').config();
const http=require('http');
const {authRoute}=require('./route/authRoute.js');

const server=http.createServer(async (req,res)=>{
    if(req.url.startsWith('/login')||req.url.startsWith('/logout')){
        await authRoute(req,res);
    }
});
server.listen(3000,()=>{
    console.log(`Server is listing at port 3000`)
});