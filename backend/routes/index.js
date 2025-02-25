const express = require("express");
const verifyToken = require("../controllers/verifyToken");
const router = express.Router();
const userController = require("../controllers/user");
const adminController = require("../controllers/admin");
// Authentication Routes
router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.put("/changepassword", verifyToken, adminController.changePassword);
//user routes
router.get("/user/:id", verifyToken, userController.getUser);
router.get("/userlist", verifyToken, userController.userList);
router.put("/user/:id", verifyToken, userController.editUser);
router.post("/user", verifyToken, userController.createUser);
router.delete("/user/:id", verifyToken, userController.deleteUser);
module.exports = router;
