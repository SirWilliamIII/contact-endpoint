const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const todos = [
  {
    id: 1,
    name: "first",
    email: "description uno",
    message: "message",
    date: "date"
  }
];

app.post("/api/cloudsnap", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    description: req.body.description
  };

  todos.push(todo);
  return res.status(201).send({
    success: "true",
    message: "todo added successfully",
    todo
  });
});

app.get("/api/cloudsnap", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "todos retrieved",
    todos
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
