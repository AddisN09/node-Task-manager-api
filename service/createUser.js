const path=require('path');
const {userModel}=require('../models/userModel.js');
const {readFileContent,writeFileContent}=require('../utils/dataAcces.js');

const filePath=path.join(__dirname,'../data/user.json');

async function createUser(username,password,role){
    const newUser= await userModel(username,password,role);
    const users=await readFileContent(filePath);
    users.push(newUser);
    await writeFileContent(filePath,users);
    return newUser;
}

module.exports={createUser};