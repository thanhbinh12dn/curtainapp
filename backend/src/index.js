const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const cors = require("cors");
const app = express();

const route = require("./routes");

const db = require("./config/db");

db.connect();

//CORS: Since they are running on different ports, they are different JavaScript origin. It doesn't matter that they are on the same machine/hostname.
//res.header("Access-Control-Allow-Origin", "*");
//res.header("Access-Control-Allow-Headers", "X-Requested-With");
app.use(cors());

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
