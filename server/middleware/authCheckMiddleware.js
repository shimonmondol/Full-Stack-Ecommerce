const jwt = require("jsonwebtoken");

async function authCheckMiddleware(req, res, next) {
  jwt.verify(
    req.headers.token,
    process.env.JWT_secret,
    function (err, decoded) {
      if (err) {
        return res.status(500).json({ success: false, msg: "Token Error" });
      }else{
        next();
      }
    }
  );
  //   if (req.headers.token == "123") {
  //     next();
  //   } else {
  //     return res.status(404).json({ msg: "Invalid Token", success: false });
  //   }
}

module.exports = authCheckMiddleware;
