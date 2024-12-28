const express = require("express");
const os = require("os");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("container running on :" + os.hostname());
  console.log(os.hostname());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
