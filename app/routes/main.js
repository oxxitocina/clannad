const express = require("express");
const router = express.Router();
router
    .route("/")
    //.get((req, res) => res.render('/index.html'))
    .get((req, res) => res.sendFile(__dirname+'/index.html'))
    .post((req, res) => res.sendFile(__dirname+'/index.html'));   
module.exports = router;


