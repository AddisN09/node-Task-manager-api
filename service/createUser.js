const path=require('path');
const {userModel}=require('../models/userModel.js');
const {readFileContent,writeFileContent}=require('../utils/dataAcces.js');
const { findUserByUsername } = require('../utils/findUser.js');
const { TMError } = require('../Errors/TMError.js');

const filePath=path.join(__dirname,'../data/user.json');

async function createUser(username,password,role){
    const oldUser=await findUserByUsername(username);
    if(oldUser){
        throw new TMError(`This user name is occupied`);
    }
    const newUser= await userModel(username,password,role);
    const users=await readFileContent(filePath);
    users.push(newUser);
    await writeFileContent(filePath,users);
    return newUser;
}

module.exports={createUser};