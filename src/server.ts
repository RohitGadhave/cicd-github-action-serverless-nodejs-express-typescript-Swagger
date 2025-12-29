import app from "./app";

const server = app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
server.on("error", () => {
  console.log("server error ");
});
