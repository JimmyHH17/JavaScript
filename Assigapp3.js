const path = require("path");

const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "users.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);