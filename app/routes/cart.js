const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/showcart.html'))
    .post((req, res) => res.sendFile(__dirname+'/showcart.html'));
module.exports = router;