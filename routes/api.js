const express = require("express");
const router = express.Router();
const supaFunc = require('../controller/index');

const root = {root: "."}

router.get("/user/:id",  (req, res) => {
    let id = req.params.id;
    id = id.split("=");
    if(id[0] === 'id') {
        supaFunc.getUser({id:id[1]})
        .then(data => {res.json(data)})
    } else if (id[0] === 'email') {
        supaFunc.getUser({email:id[1]})
        .then(data => { res.json(data)})
        
    } else {
        res.send(null);
    }
})

module.exports = router;