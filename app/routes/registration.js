const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/register.html'))
    .post((req, res) => res.sendFile(__dirname+'/register.html'));
module.exports = router;