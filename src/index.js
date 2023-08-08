const path = require("path");
const express = require("express");
const morgan = require("morgan");
const engine = require("express-handlebars");
const app = express();
const port = 3000;

//http logger
app.use(morgan("combined"));

//template engine
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("view", path.join(__dirname, "resources/views"));

app.get("/home", (req, res) => res.render("home"));

app.get("/news", (req, res) => res.render("new"));

console.log(path);

//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
