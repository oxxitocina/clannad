const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render('history'))
    .post((req, res) => res.render('history'));
module.exports = router;