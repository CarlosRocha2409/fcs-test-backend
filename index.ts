import * as http from "http";
import App from "./app";
import logger from "./src/logger/api.logger";

import "dotenv/config";

const port = process.env.PORT || 5000;

App.set("port", port);
const server = http.createServer(App);

server.listen(port);

server.on("listening", function (): void {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr!.port}`;
  logger.info(`Listening on ${bind}`, null);
});

module.exports = App;
