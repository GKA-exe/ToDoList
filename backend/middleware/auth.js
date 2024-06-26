const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Not Authorized.")

    try {
        const secretKey = 123456;
        const payload = jwt.verify(token, secretKey)
        req.user = payload;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");

        
    }
}

module.exports = auth;