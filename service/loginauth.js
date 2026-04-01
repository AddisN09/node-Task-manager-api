const crypto = require('crypto');
const { hashData } = require('../utils/hash.js');
const { findUserByUsername } = require('../utils/findUser.js');
const { createSession } = require('../utils/sessionManager.js');
const {InvalidCredential}=require('../Errors/invalidCredential.js');


async function login(username, password) {
        const user = await findUserByUsername(username);
        const hashedPassword = await hashData(password, user.password.salt);
        const result = crypto.timingSafeEqual(Buffer.from(hashedPassword, 'hex'), Buffer.from(user.password.data, 'hex'));
        if (!result) {
            throw new InvalidCredential({message:`incorrect password`},400);
        }
        const session = await createSession(user.userId, user.role);
        return { session, user };
}

 module.exports={login}
