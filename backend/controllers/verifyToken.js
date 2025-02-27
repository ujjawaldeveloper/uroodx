const jwt = require("../utils/jwt");
const verifyToken = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.admin_id = verify.admin_id; // Adjust if you use different token payloads
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid", error: err });
  }
};
module.exports = verifyToken;