const express = require("express");
const fs = require("fs");
let app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  fs.readFile("/users.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    let parsedData = JSON.parse(data);
    console.log(parsedData);
  });
  res.render("index", {
    users: {},
    date: new Date(),
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
