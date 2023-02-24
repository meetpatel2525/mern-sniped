const express = require("express");
const {
    insertUser,
} = require("../controller/userController");


const router = express.Router();

router.post("/user", insertUser);


module.exports = router;