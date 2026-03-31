const fs=require('fs');
const {promisify}=require('util');
const {TMError}=require('../Errors/TMError.js');

const readFile=promisify(fs.readFile);
const writeFile=promisify(fs.writeFile);

async function readFileContent(filePath){
    try{
    const content=await readFile(filePath,'utf8');
    return JSON.parse(content);
    }
    catch(err){
        throw new TMError({message:`failed to read data`},500);
    }
}

async function writeFileContent(filePath,content){
    try{
          await writeFile(filePath,JSON.stringify(content,null,2));
    }
     catch(err){
        throw new Error({message:`faild to write data`},500);
     }
}

module.exports={readFileContent, writeFileContent};