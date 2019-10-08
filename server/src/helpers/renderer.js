import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/components/App";

export default () => {
  const content = renderToString(<App />);

  return `
    <html>
      <head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
      </head>
    </html>
  `;
};
