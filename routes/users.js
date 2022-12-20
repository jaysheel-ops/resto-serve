const express = require("express");
const router = express.Router();
const supaFunc = require('../controller/index');
const root = { root: "." }

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

router.post("/login", async (req, res) => {
    email = req.body.email_field
    password = req.body.password_field

    const user = await supaFunc.getUser({ email })

    if (user) {
        req.session.user = user;
        req.session.save();
        if (user[0].password === password) {

            res.redirect('/')
        } else {
            res.sendFile("/public/error/login-error.html", root);
        }
    } else {
        res.sendFile("/public/error/login-error.html", root);
    }


})

router.post("/registration", async (req, res) => {
    const user = {
        name: req.body.name_field,
        email: req.body.email_field,
        password: req.body.password_field
    }

    console.log(user);

    if (user.name === "" || user.email === "" || user.password === "") {
        res.sendFile("/public/error.html", root);
    } else {
        const state = await supaFunc.addUser(user)

        if (state) {
            res.sendFile("/public/error/success.html", root);
        } else {
            res.sendFile("/public/error/signup-error.html", root);
        }

    }


})

module.exports = router;