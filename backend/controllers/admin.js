const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ msg: "Email already exists" });
    }
    admin = new Admin({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);
    await admin.save();
    res.json({ msg: "Admin registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign({ admin_id: admin._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const admin_id = req.admin_id;
  try {
    let admin = await Admin.findById(admin_id);
    if (!admin) {
      return res.status(400).json({ msg: "Admin not found" });
    }
    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect old password" });
    }
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(newPassword, salt);
    await admin.save();
    res.json({ msg: "Password changed successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
