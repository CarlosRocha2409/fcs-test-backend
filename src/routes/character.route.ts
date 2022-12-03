import { Router } from "express";
import { CharacterController } from "../controllers/character.controller";

export class characterRoutes {
  private controller: CharacterController;
  public router: Router;

  constructor() {
    this.controller = new CharacterController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.initISearch();
    this.initGetItem();
  }

  private initISearch() {
    this.router.get("/", (req, res, next) => {
      this.controller
        .searchCharacters(req.query)
        .then((data) => res.status(200).json(data))
        .catch((e) => next(e));
    });
  }

  private initGetItem() {
    this.router.get("/:id", (req, res, next) => {
      this.controller
        .getSingleCharacter(+req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((e) => next(e));
    });
  }
}
export const CharacterRoutes = new characterRoutes().router;
