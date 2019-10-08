import express from "express";
import renderer from "./helpers/renderer";

const server = express();

server.use(express.static("public"));

server.get("*", (req, res) => {
  res.send(renderer(req));
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`\n::: Listening on port ${PORT} :::\n`);
});
