import http, { RequestListener, Server } from "http";

class AppServer {
  server?: Server;

  init(app: RequestListener) {
    this.server = http.createServer(app);
  }
}

export const appServer = new AppServer();
