import * as bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import logger from "./src/logger/api.logger";
import { ApiError } from "./src/error-handling/ApiErrot";
import { CharacterRoutes } from "./src/routes/character.route";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use((req, __, next) => {
      logger.info(`[HTTP Request ${req.method}]: ${req.url}`);
      next();
    });
  }

  private routes(): void {
    this.express.use("/api/items", CharacterRoutes);
    this.express.get("/", (req, res, next) => {
      res.send("Typescript App works!!");
    });

    // handle undefined routes
    this.express.use("*", (req, res, next) => {
      res.send("Make sure url is correct!!!");
    });

    this.express.use((e: ApiError, req: any, res: any, next: any) => {
      res.status(e.statusCode).json({
        name: e.message,
        message: e.name,
        status: e.statusCode,
      });
    });
  }
}

export default new App().express;
