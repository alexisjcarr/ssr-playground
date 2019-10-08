import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import Example from "./client/components/Example";

const server = express();

server.get("/", (req, res) => {
  const content = renderToString(<Example />);

  res.send(content);
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`\n::: Listening on port ${PORT} :::\n`);
});
