const express = require("express");
const router = express.Router();

const root = {root: "."}

router.get("/", (req, res) => {
    res.sendFile("./public/index.html", root);
})

router.get("/login", (req, res) => {
    res.sendFile("./public/login.html", root)
})

router.get("/signup", (req, res) => {
    res.sendFile("./public/signup.html", root)
})

module.exports = router;