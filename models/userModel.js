const {encryptData,decryptData}=require('../utils/encrypt-decrypt.js');
const {hashData}=require('../utils/hash.js');
const {idGenerator}=require('../utils/idGenerator.js');

async function userModel(username,password='Default',role='user'){
    return {
        userId:await encryptData(await idGenerator()),
        username: await encryptData(username),
        password: await hashData(password),
        role:await encryptData(role)
    }
}

module.exports={userModel};