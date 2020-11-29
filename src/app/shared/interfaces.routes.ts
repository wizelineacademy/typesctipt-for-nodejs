import { Request, Response } from "express";

export interface Route {
  name: string;
  method: string;
  path: string;
  handler: (req: Request, res: Response) => void;
  isProtected: boolean;
}
