import { Router, Request, Response } from "express";

const appRoutes = Router();

appRoutes.get("/", (req: Request, res: Response) => {
  res.send("working.....q");
});

export default appRoutes;
