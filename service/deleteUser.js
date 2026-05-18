const { UserNotFound } = require('../Errors/noUser.js');
const { readFileContent, writeFileContent } = require('../utils/dataAcces.js');
const path = require('path');

const filePath = path.join(__dirname, '../data/user.json');

async function deleteUser(userId) {
     let users = await readFileContent(filePath);
     const filteredUsers = users.filter(user => user.userId !== userId);
     if (users.length === filteredUsers.length) {
          throw new UserNotFound(`There is no user with user ID ${userId}`, 404);
     }
     await writeFileContent(filePath, filteredUsers);
     return true;
}


module.exports = { deleteUser };