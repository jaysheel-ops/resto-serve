const express = require("express");
const router = express.Router();
const supaFunc = require('../controller/index');

const root = { root: "." }

router.get("/user", (req, res) => {
    let id = req.query.id;

    let email = req.query.email;

    if (id) {
        supaFunc.getUser({ id })
            .then(data => { res.json(data) })
    } else if (email) {
        supaFunc.getUser({ email })
            .then(data => { res.json(data) })
    } else {
        res.send(null);
    }
})

module.exports = router;