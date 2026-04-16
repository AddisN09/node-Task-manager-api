const { TMError } = require('../Errors/TMError.js');
const { readFileContent } = require('../utils/dataAcces.js');
const {findUserByUsername}=require('../utils/findUser.js');
const path = require('path');

const filePath = path.join(__dirname, '../data/user.json');


async function getUser(username){
    const users=await readFileContent(filePath);
    const user=await findUserByUsername(users,username);
    if(!user){
        throw new TMError(`There is no user with this ${username} username`);
    }
    return {username:user.username,userId:user.userId,role:user.role};
}

module.exports={getUser};