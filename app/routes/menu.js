const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/products.html'))
    .post((req, res) => res.sendFile(__dirname+'/products.html'));
module.exports = router;