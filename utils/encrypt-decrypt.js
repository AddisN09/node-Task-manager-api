require('dotenv').config({path:'../.env'});
const crypto=require('crypto');
const { TMError}=require('../Errors/TMError.js');


const key=Buffer.from(process.env.Encryption_key,'hex');

async function encryptData(data){
    try{
    const iv=crypto.randomBytes(16);
    const cipher=crypto.createCipheriv('aes-256-cbc',key,iv);
    let encrypted=cipher.update(data,'utf8','hex');
    encrypted+=cipher.final('hex');
    return {
        data:encrypted,
        iv:iv.toString('hex')
    }
}
catch(err){
    throw new TMError({message:`faild to encrypt the data ${err}`},500);
}
} 

 async function decryptData(data,iv){
    try{
    const cipher=crypto.createDecipheriv('aes-256-cbc',key,Buffer.from(iv,'hex'));
    let decrypted=cipher.update(data,'hex','utf8');
    decrypted+=cipher.final('utf8');
    return decrypted;
    }
    catch(err){
        throw new TMError({message:`faild to decrypt the data`},500);
    }
 }

 module.exports={ encryptData, decryptData };