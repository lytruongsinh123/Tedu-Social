import { Request, Response, NextFunction } from "express";

export default class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send("API is running");
    } catch (error) {
      next(error);
    }
  };
}
