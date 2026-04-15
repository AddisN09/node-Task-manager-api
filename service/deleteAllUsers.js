const path=require('path');
const {readFileContent, writeFileContent}=require('../utils/dataAcces.js');
 
const filePath=path.join(__dirname,'../data/user.json');

async function deleteAllUsers(){
      const users=await readFileContent(filePath);
      const admin=users.filter(user=>user.role==='Admin');
            await writeFileContent(filePath,admin);
            return true;
}

module.exports={deleteAllUsers};
