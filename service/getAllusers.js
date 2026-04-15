const {readFileContent}=require('../utils/dataAcces.js');
const path=require('path');

const filePath=path.join(__dirname,'../data/user.json');

async function getAllUsers(){
    const users=await readFileContent(filePath);
    let store=[];
    users.forEach(user=>{
        store.push({username:user.username,userId:user.userId,role:user.role});
    });
    return store; 
}

 module.exports={getAllUsers};
 