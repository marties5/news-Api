const express = require("express")
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(8000, () => {
  console.log(`Node API is Running in port 8000`);
})