const express = require("express");
const router = express.Router();
const supaFunc = require('../controller/index');
const root = {root: "."}

router.get("/", (req, res) => {
    res.send("Browse page")  
})


module.exports = router;