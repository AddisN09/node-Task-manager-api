const {decryptData}=require('../utils/encrypt-decrypt.js');  
const {readFileContent}=require('../utils/dataAcces.js');
const path=require('path');

const filePath=path.join(__dirname,'../data/user.json');

async function getAllUsers(){
    const users=await readFileContent(filePath);
    let store=[];
    for(let user of users){
        const userId=await decryptData(user.userId.data,user.userId.iv);
        const username=await decryptData(user.username.data,user.username.iv);
        const role=await decryptData(user.role.data,user.role.iv);
        store.push({username,userId,role});
    }
    return store;
}

 module.exports={getAllUsers};
 