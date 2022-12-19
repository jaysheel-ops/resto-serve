const express = require("express");
const router = express.Router();

const root = {root: "."}

router.get("/", (req, res) => {
    res.sendFile("./static/index.html", root);
})

router.get("/login", (req, res) => {
    res.sendFile("./static/login.html", root)
})

router.get("/signup", (req, res) => {
    res.sendFile("./static/register.html", root)
})

module.exports = router;