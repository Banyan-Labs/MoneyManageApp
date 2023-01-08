const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.end();
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
