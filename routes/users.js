const express = require("express");
const router = express.Router();
const supaFunc = require('../controller/index');
const root = {root: "."}

router.post("/login", async(req, res) => {
    email= req.body.email_field
    password= req.body.password_field
    
    const user = await supaFunc.getUser({email})
    
    if(user) {
        if(user[0].password === password) {

        res.redirect('http://localhost:3000/browse')
        } else {
            res.send("Failure! Enter correct email or pass")
        }
    } else {
        res.send("No user")


    }

    
})

router.post("/registration", async (req, res)  => {
    const user = {
        name: req.body.name_field,
        email: req.body.email_field,
        password: req.body.password_field
    }

    const state = await supaFunc.addUser(user)

    if(state) {
        res.send("Success");
    } else {
        res.send(`Error ocurred`);
    }
    
})

module.exports = router;