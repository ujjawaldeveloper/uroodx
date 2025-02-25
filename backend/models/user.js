const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  profession: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  isCustomer: {
    type: Boolean,
  },
  admin_id: {
    type: String,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", UserSchema);
