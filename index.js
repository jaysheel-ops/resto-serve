/* Common JS import */
const express = require("express")
const bodyParser = require("body-parser");
require("dotenv").config();

const supaFunc = require('./controller/index');

const app =   express();
const PORT = process.env.PORT;
const root = {root: "."}

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`${PORT}`));

app.get("/", (req, res) => {
    supaFunc.getUsers()
    .then(data => {res.json(data)})

    
})

// app.get("/:id", (req, res) => {
    
// })