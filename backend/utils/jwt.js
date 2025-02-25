const jwt = require("jsonwebtoken");
exports.sign = (payload) => {
  return jwt.sign(payload, "jwt_secret_key", { expiresIn: "10000000h" });
};
exports.verify = (token) => {
  return jwt.verify(token, "jwt_secret_key");
};
