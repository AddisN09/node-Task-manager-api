require('dotenv').config();
const http=require('http');
const {send}=require('./utils/send.js');
const {authRoute}=require('./route/authRoute.js');
const {meRoute}=require('./route/meRoute.js');
const {createUserRoute}=require('./route/createUserRoute.js');
const { getAllusersRoute } = require('./route/getAllusersRoute.js');
const { getUserRoute } = require('./route/getUserRoute.js');
const { deleteAllusersRoute } = require('./route/deleteAllUsersRoute.js');
const {deleteUserRoute}=require('./route/deleteUserRoute.js');
const { resetPasswordRoute } = require('./route/resetPasswordRoute.js');

const server=http.createServer(async (req,res)=>{
     if(await authRoute(req,res))return;
     if(await meRoute(req,res))return;
     if(await createUserRoute(req,res))return;
     if(await getAllusersRoute(req,res))return;
     if(await getUserRoute(req,res))return;
     if(await deleteAllusersRoute(req,res))return;
     if(await deleteUserRoute(req,res))return;
     if(await resetPasswordRoute(req,res))return;

     send(res,404,{message:`route not found`});
});
server.listen(3000,()=>{
    console.log(`Server is listing at port 3000`)
});