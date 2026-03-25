const crypto=require('crypto');
const {promisify}=require('util');

const scryptAsync=promisify(crypto.scrypt);

async function hashData(data,saltValue=null){
    try{
    const salt=!saltValue?crypto.randomBytes(16):Buffer.from(saltValue,'hex');
    const hashed=await scryptAsync(data,salt,32);
    return hashed.toString('hex');
    }
    catch(err){
        throw new Error(`can't hash the data ${err}`);
    }
}

 module.exports={ hashData };