const { UserNotFound } = require("../Errors/noUser");
const path=require('path');
const {readFileContent,writeFileContent}=require('../utils/dataAcces.js');
const {findUserByUsername}=require('../utils/findUser.js');
const {hashData}=require('../utils/hash.js');

const filePath=path.join(__dirname,'../data/user.json');

async function resetPassword(username){
    const users=await readFileContent(filePath);
      const user=await findUserByUsername(users,username);
      if(!user){
        throw new UserNotFound(`There is no user with such username`);
      }
      user.password=await hashData('Default');
      await writeFileContent(filePath,users);
      return true;
}

module.exports={resetPassword};