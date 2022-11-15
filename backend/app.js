const express = require("express");
const Post = require("./models/Post");
const app = express();
const postData = new Post();
const data = require("./data.json");

app.get("/", (req, res) => {
  res.send(postData.get());
});

app.listen(4000, () => {
  console.log("4000 port is running");
});
