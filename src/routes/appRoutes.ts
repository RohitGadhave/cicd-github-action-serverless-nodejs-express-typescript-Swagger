import { Router, Request, Response } from "express";

const appRoutes = Router();

appRoutes.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "working...", time: new Date().toString() });
});

export default appRoutes;
