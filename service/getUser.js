const { TMError } = require('../Errors/TMError.js');
const {findUserByUsername}=require('../utils/findUser.js');

async function getUser(username){
    const user=await findUserByUsername(username);
    if(!user){
        throw new TMError(`There is no user with this ${username} username`);
    }
    return {username:user.username,userId:user.userId,role:user.role};
}

module.exports={getUser};