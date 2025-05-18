const jwt = require("jsonwebtoken");
async function authCheckMiddleware(req, res, next) {
  jwt.verify(
    req.headers.token,
    process.env.JWT_Secret,
    function (err, decoded) {
      if (err) {
        return res.status(500).json({ success: false, msg: "Token Error" });
      } else {
        next();
      }
    }
  );
}

module.exports = authCheckMiddleware;
