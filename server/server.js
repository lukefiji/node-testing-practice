const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/404", (req, res) => {
  res.status(404).send({
    error: "Page not found.",
    name: "Practice Tests v1.0"
  });
});

app.get("/users", (req, res) => {
  res.send([
    { name: "Luke", age: 25 },
    { name: "Nate", age: 26 },
    { name: "Anon", age: 27 }
  ]);
});

app.listen(3000);

module.exports.app = app;
