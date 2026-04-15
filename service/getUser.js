const { TMError } = require('../Errors/TMError.js');
const { decryptData } = require('../utils/encrypt-decrypt.js');
const {findUserByUsername}=require('../utils/findUser.js');

async function getUser(username){
    const user=await findUserByUsername(username);
    if(!user){
        throw new TMError(`There is no user with this ${username} username`);
    }
    return {
        username:await decryptData(user.username.data,user.username.iv),
        userId:await decryptData(user.userId.data,user.userId.iv),
        role:await decryptData(user.role.data,user.role.iv)
    }
}

module.exports={getUser};