import { Request, Response } from "express";

export interface IRoute {
  name: string;
  method: string;
  path: string;
  handler: (req: Request, res: Response) => void;
  isProtected: boolean;
}
