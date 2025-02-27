const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  company_name: { type: String },
  address: { type: String },
  subscription_plan: { type: String, default: "basic" },
  created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model("User", UserSchema);