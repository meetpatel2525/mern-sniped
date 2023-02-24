const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    birthday: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: false,
    },

    userStatus: {
        type: Boolean,
        default: true,
    },

    veryfyEmail: {
        type: Boolean,
        default: false
    },

});

// hasing password
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

// Compare Password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);