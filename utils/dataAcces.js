const fs=require('fs');
const {promisify}=require('util');

const readFile=promisify(fs.readFile);
const writeFile=promisify(fs.writeFile);

async function readFileContent(filePath){
    try{
    const content=await readFile(filePath,'utf8');
    return JSON.parse(content);
    }
    catch(err){
        throw new Error(`can't readFile from the database ${err}`);
    }
}

async function writeFileContent(filePath,content){
    try{
          await writeFile(filePath,JSON.stringify(content,null,2));
    }
     catch(err){
        throw new Error(`cant write file to the database ${err}`);
     }
}

module.exports={readFileContent, writeFileContent};