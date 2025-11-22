const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  throw new Error("Production bug!");

});

app.listen(3000, () => console.log("API running"));