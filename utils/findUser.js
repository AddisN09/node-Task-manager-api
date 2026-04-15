const path = require('path');
const { readFileContent } = require('./dataAcces.js');
 
const filePath = path.join(__dirname, '../data/user.json');

async function findUserByUsername(username) {
    const users = await readFileContent(filePath);
    const user=users.find(user=>user.username===username);
    if(!user)return null;
    return user;
    }

module.exports = { findUserByUsername };