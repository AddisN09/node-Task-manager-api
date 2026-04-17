const { readFileContent } = require('../utils/dataAcces.js');
const path = require('path');
const { findUserByUsername } = require('../utils/findUser.js');

const filePath = path.join(__dirname, '../data/user.json');

async function userActivity(username, activity) {
    const users = await readFileContent(filePath);
    let user = await findUserByUsername(users, username);
    if (!user) {
        throw new TMError(`There is no user with this ${username} username`);
    }
    user.active = activity;
    return `user activity is changed in to ${activity}`;
}

module.exports = { userActivity };