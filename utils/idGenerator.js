const crypto=require('crypto');
const {TMError}=require('../Errors/TMError.js');

async function idGenerator(){
    try{
    return crypto.randomBytes(2).toString('hex');
    }
    catch(err){
        throw new TMError({message:`faild to generate id`},500);
    }
}
module.exports={idGenerator};
 