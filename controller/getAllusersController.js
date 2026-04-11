const { getAllUsers } = require('../service/getAllusers.js');
const { send } = require('../utils/send.js');
const { sendError } = require('../utils/sendError.js');

async function getAllUsersController(req, res) {
    try {
        const users =await getAllUsers();
        return send(res,200,users);
    }
    catch(err){
        return sendError(res,err);
    }
}
module.exports={getAllUsersController};