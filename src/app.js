const express = require("express"); // use for backend
const cookieparser = require("cookie-parser")


const authRouter  = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")


const app = express();

app.use(express.json())
app.use(cookieparser())

app.use("/api/auth",authRouter)
app.use("/api/accounts",accountRouter)

module.exports = app

// app.js is used to config 