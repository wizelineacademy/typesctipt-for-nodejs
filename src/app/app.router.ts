// Import main app & express Router module.
import { Router } from "express";

// Init express router.
export const router: Router = Router()

router.get('/', function (req, res) {
    res.json({ success: true, route: "/" });

})