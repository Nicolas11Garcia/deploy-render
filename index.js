import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.listen(PORT, async () => {
  console.log(`APP LEVANTADA EN PUERTO ${PORT}`);
});
