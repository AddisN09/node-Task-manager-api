const crypto = require('crypto');
const { hashData } = require('../utils/hash.js');
const { findUserByUsername } = require('../utils/findUser.js');
const { createSession } = require('../utils/sessionManager.js');
const {InvalidCredential}=require('../Errors/invalidCredential.js');
const path = require('path');
const { readFileContent } = require('../utils/dataAcces.js');

const filePath = path.join(__dirname, '../data/user.json');

async function login(username, password) {
        const users=await readFileContent(filePath);
        const user = await findUserByUsername(users,username);
        if(!user){
            throw new UserNotFound({ message: `user not found boom` }, 404);
        }
        const hashedPassword = await hashData(password, user.password.salt);
        const result = crypto.timingSafeEqual(Buffer.from(hashedPassword.data, 'hex'), Buffer.from(user.password.data, 'hex'));
        if (!result) {
            throw new InvalidCredential({message:`incorrect password`},400);
        }
        const session = await createSession(user.userId, user.role);
        return { session, user };
}

 module.exports={login}
