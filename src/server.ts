// index.ts
import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send(
    "Hello from Express + TypeScript! cicd github action serverless nodejs express typescript swagger",
  );
});
const server = app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
server.on("error", () => {
  console.log("server error ");
});
