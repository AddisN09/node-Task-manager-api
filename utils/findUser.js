const { TMError } = require("../Errors/TMError");

async function findUserByUsername(data,username) {
    if(!Array.isArray(data)){
         throw new TMError('improper data server error',500);
    }
    const user=data.find(user=>user.username===username);
    if(!user)return null;
    return user;
    }

 module.exports = { findUserByUsername };
 