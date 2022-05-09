const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/login.html'))
    .post((req, res) => res.sendFile(__dirname+'/login.html'));
module.exports = router;