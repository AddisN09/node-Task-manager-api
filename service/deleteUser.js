const { UserNotFound } = require('../Errors/noUser.js');
const { readFileContent, writeFileContent } = require('../utils/dataAcces.js');
const path = require('path');

const filePath = path.join(__dirname, '../data/user.json');

async function deleteUser(username) {
     let users = await readFileContent(filePath);
     const filteredUsers = users.filter(user => user.username !== username);
     if (users.length === filteredUsers.length) {
          throw new UserNotFound(`There is no user with user name ${username}`, 404);
     }
     await writeFileContent(filePath, filteredUsers);
     return true;
}


module.exports = { deleteUser };