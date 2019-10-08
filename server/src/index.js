import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import App from "./client/components/App";

const server = express();

server.use(express.static("public"));

server.get("/", (req, res) => {
  const content = renderToString(<App />);

  const html = `
    <html>
      <head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
      </head>
    </html>
  `;

  res.send(html);
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`\n::: Listening on port ${PORT} :::\n`);
});
