const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const route = require("./routes");

const db = require("./config/db");

db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Route init
route(app);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(1000, () => {
  console.log("Server at http://localhost:1000");
});
