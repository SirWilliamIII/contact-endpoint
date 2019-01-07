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
    name: "first name",
    email: "email 1",
    message: "message is here",
    date: "a date"
  }
];

app.post("/api/cloudsnap", (req, res) => {
  const m = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
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
    messages
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
