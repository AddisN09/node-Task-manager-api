const { readFileContent,writeFileContent } = require('../utils/dataAcces.js');
const path = require('path');
const { findUserByUsername } = require('../utils/findUser.js');
const { TMError }=require('../Errors/TMError.js');

const filePath = path.join(__dirname, '../data/user.json');

async function userActivity(userId, activity) {
    const users = await readFileContent(filePath);

    let user = users.find(user=>user.userId===userId);
    if (!user) {
        throw new TMError(`There is no user with userId ${userId}`,404);
    }
    user.active = activity;
    await writeFileContent(filePath,users);
    return `user activity is changed in to ${activity}`;
}

module.exports = { userActivity };