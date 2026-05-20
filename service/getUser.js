const { TMError } = require('../Errors/TMError.js');
const { readFileContent } = require('../utils/dataAcces.js');
const {findUserByUsername}=require('../utils/findUser.js');
const path = require('path');

const filePath = path.join(__dirname, '../data/user.json');


async function getUser(userId){
    const users=await readFileContent(filePath);
    const user=users.find(user=>user.userId===userId);
    if(!user){
        throw new TMError(`There is no user with this ${userId} userId`,404);
    }
    return {username:user.username,userId:user.userId,role:user.role,active:user.active};
}

module.exports={getUser};