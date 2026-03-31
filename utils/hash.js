const crypto=require('crypto');
const {promisify}=require('util');
const {TMError}=require('../Errors/TMError.js');

const scryptAsync=promisify(crypto.scrypt);

async function hashData(data,saltValue=null){
    try{
    const salt=!saltValue?crypto.randomBytes(16):Buffer.from(saltValue,'hex');
    const hashed=await scryptAsync(data,salt,32);
    return hashed.toString('hex');
    }
    catch(err){
        throw new TMError({message:`faild to hash the data`},500);
    }
}

 module.exports={ hashData };