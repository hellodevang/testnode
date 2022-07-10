const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Sending through Node server with express");
});

app.listen(8000);
