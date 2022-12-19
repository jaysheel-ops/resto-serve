const express = require("express")
const bodyParser = require("body-parser");
require("dotenv").config();
const router = express.Router();
const supaFunc = require('./controller/index');

const PORT = process.env.PORT || 3000;
const root = {root: "."}
const app =   express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`${PORT}`));


app.use("/", router);
router.get("/", (req, res) => {
    supaFunc.getUser()
    .then(data => {res.json(data)})
})

router.get("/login", (req, res) => {
    res.sendFile("./static/login.html", root)
})

router.get("/signup", (req, res) => {
    res.sendFile("./static/regiser.html", root)
})

router.post("/user/registration", async (req, res)  => {
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

router.get("/api/user/:id",  (req, res) => {
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

