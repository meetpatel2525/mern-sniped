const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const user = require("./router/userRoute");
const url = "mongodb://localhost/demo";
// mongodb://localhost:27017
// const url = process.env.MY_DB;
require("dotenv").config();
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
mongoose.connect(url);
const con = mongoose.connection;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/v1", user);


con.on("open", () => {
    console.log("connected sucessfully....")
});

app.listen(port, () => console.log(`app listening on port ${port}!`));