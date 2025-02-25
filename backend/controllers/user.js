const User = require("../models/user");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.editUser = async (req, res) => {
  const { name, email, profession, description, status, isCustomer } = req.body;
  const userFields = {
    name,
    email,
    profession,
    description,
    status,
    isCustomer,
    modifiedOn: Date.now(),
  };
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.createUser = async (req, res) => {
  const { name, email, profession, description, status, isCustomer } = req.body;
  const admin_id = req.admin_id;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({
      name,
      email,
      profession,
      description,
      status,
      isCustomer,
      admin_id,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "User removed" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.userList = async (req, res) => {
  const admin_id = req.admin_id;
  try {
    const users = await User.find({ admin_id });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
