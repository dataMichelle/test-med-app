// src/server/index.js
import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Server is running! You did it!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
