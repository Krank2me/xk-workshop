const { Router } = require("express");

const addUser = require("../controllers/addUser");
const deleteUser = require("../controllers/deleteUser");
const getUserById = require("../controllers/getUserById");
const getUser = require("../controllers/getUsers");
const updateUser = require("../controllers/updateUser");

const router = Router();

router.post("/add", addUser);

module.exports = router;
