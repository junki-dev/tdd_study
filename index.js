var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var app = express();

var users = [
  { id: 1, name: "jerome" },
  { id: 2, name: "zion" },
  { id: 3, name: "chris" },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/users", function (req, res) {
  const limit = parseInt(req.query.limit || 10, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  res.send(users.slice(0, limit));
});

app.get("/users/:id", function (req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }

  const user = users.filter((user) => user.id === id)[0];
  if (!user) {
    return res.status(404).end();
  }

  res.json(user);
});

app.delete("/users/:id", function (req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }

  users = users.filter((user) => user.id !== id);
  res.status(204).end();
});

app.post("/users", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).end();
  }

  const isConflict = users.filter((user) => user.name === name).length;
  if (isConflict) {
    return res.status(409).end();
  }

  const id = Date.now();
  const user = { name, id };
  users.push(user);
  res.status(201).json(user);
});

app.listen(3000, function () {
  console.log(`Example app listening on port 3000!`);
});

module.exports = app;
