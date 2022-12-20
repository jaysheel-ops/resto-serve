const express = require("express");
const router = express.Router();

const root = { root: "." }

router.get("/", (req, res) => {
    let session = req.session;

    if (session.user) {
        res.redirect("/browse");
    } else {
        res.redirect("/login");
    }

})

router.get('/browse', (req, res) => {
    if (req.session.user) {
        res.sendFile("./public/home.html", root);
    } else {
        res.redirect("/login");
    }
})

router.get("/login", (req, res) => {
    if (req.session.user) {
        res.redirect("/");
    }

    res.sendFile("./public/login.html", root)
})

router.get("/signup", (req, res) => {
    if (req.session.user) {
        res.redirect("/")
    } else {
        res.sendFile("./public/signup.html", root)
    }
})

module.exports = router;