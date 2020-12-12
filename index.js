const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
//Import date from external moduel
const today = require(__dirname + "/date");
var favicon = require("serve-favicon");
var path = require("path");
const app = express();
const port = 3000;

//Set Ejs
app.set("view engine", "ejs");

//Serve css files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

//To do array
var toDos = ["Eat", "Sleep", "Code"];

//Get values from external functions
const dayName = today.getDayName();
const monthName = today.getMonthName();
const date_with_suffix = today.getDayWithSuffix();

app.get("/", (req, res) => {
  res.render("home", {
    toDos: toDos,
    date: date_with_suffix,
    day: dayName,
    month: monthName,
  });
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  toDos.push(newItem);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const itemToDelete = req.body.current_item;
  const index = toDos.indexOf(itemToDelete);
  toDos.splice(index);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is started at Port:${port}`);
});
