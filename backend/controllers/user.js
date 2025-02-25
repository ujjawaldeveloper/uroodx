const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.userList = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.createUser = async (req, res) => {
  const { email, password_hash, company_name, address, subscription_plan } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });
    user = new User({ email, password_hash, company_name, address, subscription_plan });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.editUser = async (req, res) => {
  const { company_name, address, subscription_plan } = req.body;
  const userFields = { company_name, address, subscription_plan, created_at: Date.now() };
  try {
    let user = await User.findByIdAndUpdate(req.params.id, { $set: userFields }, { new: true });
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "User removed" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
