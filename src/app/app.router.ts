import { Router } from "express";
import { appGetHandler } from "./app.controller";

export const router: Router = Router();

router.route('/').get(appGetHandler);
