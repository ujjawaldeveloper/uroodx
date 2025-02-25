const jwt = require("jsonwebtoken");

module.exports = {
  sign: (payload, secret, options) => {
    return jwt.sign(payload, secret, options);
  },
  verify: (token, secret) => {
    return jwt.verify(token, secret);
  }
};
