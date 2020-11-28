import * as express from "express";

export const salesGetHandler = (req: express.Request, res: express.Response) => {
    res.json("Hello, sales!")
}