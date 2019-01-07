const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const messages = [
  {
    id: 1,
    name: "first",
    email: "description uno",
    message: "message",
    date: "date"
  }
];

app.post("/api/cloudsnap", (req, res) => {
  const m = {
    id: messages.length + 1,
    name: req.body.title,
    email: req.body.description,
    message: req.body.message,
    date: req.body.date
  };

  messages.push(m);
  return res.status(201).send({
    success: "true",
    message: "message added successfully",
    m
  });
});

app.get("/api/cloudsnap", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "message retrieved",
    todos
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
