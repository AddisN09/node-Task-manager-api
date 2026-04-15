const path=require('path');
const {readFileContent, writeFileContent}=require('../utils/dataAcces.js');
const {decryptData}=require('../utils/encrypt-decrypt.js');
const { TMError } = require('../Errors/TMError.js');
const filePath=path.join(__dirname,'../data/user.json');

async function deleteAllUsers(){
      const users=await readFileContent(filePath);
      for(let user of users){
        let decryptedRole=await decryptData(user.role.data,user.role.iv);
        if(decryptedRole==='Admin'){
            users.length=0;
            users.push(user);
            await writeFileContent(filePath,users);
            return true;
        }
      }
      throw new TMError('server Error',500);
}

module.exports={deleteAllUsers};
