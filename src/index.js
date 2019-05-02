const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Funcionando");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listem on http://localhost:${port}`);
});
