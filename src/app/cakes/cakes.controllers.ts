import { Request, Response } from "express";

function createCake(req: Request, res: Response) {}

function getCakes(req: Request, res: Response) {
  res.send("Holi");
}

function updateCake(req: Request, res: Response) {}

function getCake(req: Request, res: Response) {
  res.send("Holi");
}

export { getCakes, createCake, updateCake, getCake };
