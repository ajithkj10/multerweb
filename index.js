const router = require("./router/rout");
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.get("/", (req, res) => { 
//     res.render("first")
// })
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "style")))

app.use("/", router);


app.listen(1000, (req, res) => {
    console.log("server is ready");

})