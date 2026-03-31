require('dotenv').config({ path: '../.env' });
const { decryptData } = require('./encrypt-decrypt.js');
const crypto = require('crypto');
const { readFileContent } = require('./dataAcces.js');
const path = require('path');

const filePath = path.join(__dirname, '../data/user.json');

async function findUserByUsername(username) {
    try {
        const users = await readFileContent(filePath);
        let user = null;
        for (let element of users) {
            let decrypted = await decryptData(element.username.data, element.username.iv);
            if (decrypted===username) {
                user = element;
                break;
            }
        }
        return user;
    }
    catch (err) {
        throw new Error(`There is no such user ${err}`);
    }
}

module.exports = { findUserByUsername };