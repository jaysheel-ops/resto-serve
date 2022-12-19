const express = require("express")
const bodyParser = require("body-parser");
const router = express.Router();
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const apiRouter = require("./routes/api");
const browseRouter = require("./routes/browse");
const supaFunc = require('./controller/index');
 
const PORT = process.env.PORT || 3000;
const root = {root: "."}
const app =   express();
require("dotenv").config();

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`${PORT}`));


app.use("/", indexRouter);   
app.use("/user/", userRouter);
app.use('/api/', apiRouter);
app.use('/browse/', browseRouter);