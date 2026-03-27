const crypto=require('crypto');

async function idGenerator(){
    return crypto.randomUUID();
}
module.exports={idGenerator};