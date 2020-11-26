import { Router } from "express";
import { cupcakeGetHandler } from "./cupcake.controller";

export const router: Router = Router();

router.route('/').get(cupcakeGetHandler);
