const User = require("../models/userModel");

// register admin 
exports.insertUser = async(req, res) => {
    try {

        res.status(200).json({
            message: "user register successfully",

        });
    } catch (error) {
        res.status(400).send(error);
    }
};