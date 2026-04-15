const {hashData}=require('../utils/hash.js');
const {idGenerator}=require('../utils/idGenerator.js');

async function userModel(username,password='Default',role='user'){
    return {
        userId:await idGenerator(),
        username,
        password: await hashData(password),
        role,
        active:true
    }
}

module.exports={userModel};