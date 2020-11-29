import { Request, Response } from "express";

export function homeHandler(req: Request, res: Response) {
  res.send("Welcome to cake shop :D");
}

export function healthHandler(req: Request, res: Response) {
  res.status(200).send("The server is running ok :)");
}
