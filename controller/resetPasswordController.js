const { bodyParser } = require('../middleware/bodyParser.js');
const { resetPassword } = require('../service/passwordReset.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');
async function resetPasswordController(req, res) {
    try {
        const body = await bodyParser(req);
        await resetPassword(body.username);
        return send(res, 200, { message: `password is successfuly reseted` });
    } catch (err) {
        return sendError(res, err);
    }
}

module.exports={resetPasswordController};