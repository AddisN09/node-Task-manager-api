const path = require('path');
const { decryptData } = require('./encrypt-decrypt.js');
const { readFileContent } = require('./dataAcces.js');
const { UserNotFound } = require('../Errors/noUser.js');
const { TMError } = require('../Errors/TMError.js');



const filePath = path.join(__dirname, '../data/user.json');

async function findUserByUsername(username) {
    const users = await readFileContent(filePath);
    for (let element of users) {
         let decrypted = await decryptData(element.username.data, element.username.iv);
        if (decrypted === username) {
            return element;
        }
    }
        throw new UserNotFound({ message: `user not found boom` }, 404);
}

module.exports = { findUserByUsername };