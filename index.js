const express = require("express")
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const apiRouter = require("./routes/api");

const PORT = process.env.PORT || 3000;
const root = { root: "." }
const app = express();
require("dotenv").config();

app.use(session({
    secret: "thisismysupersecretkeyf12k14j",
    saveUninitialized: true,
    cookie: { loginDetail: false },
    resave: false,
}))
app.use(cookieParser());
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`${PORT}`));

app.use('/', indexRouter);
app.use('/user/', userRouter);
app.use('/api/', apiRouter);
