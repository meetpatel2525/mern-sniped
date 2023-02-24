const mongoose = require("mongoose");

const contectusSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },

});

contectusSchema.set("timestamps", true);

module.exports = mongoose.model("ContectUs", contectusSchema);