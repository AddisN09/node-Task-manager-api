async function cookieParser(req) {
    let cookie = req.headers.cookie||'';
    let cookies = {};
    if (!cookie) return cookies;
    cookie.split(';').forEach(pair => {
        const [key, value] = pair.trim().split('=');
        cookies[key]=value;
    });
    return cookies;
}
module.exports={cookieParser};