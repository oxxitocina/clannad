const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/adminlogin.html'))
    .post((req, res) => res.sendFile(__dirname+'/adminlogin.html'));
module.exports = router;