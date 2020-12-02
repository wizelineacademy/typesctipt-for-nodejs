import { Router } from "express";
import { handler as deleteHandler } from "./salesHandler/delete.handler";
import { handler as getHandler } from "./salesHandler/get.handler";
import { handler as updateHandler } from "./salesHandler/patch.handler";
import { handler as postHandler } from "./salesHandler/post.handler";

export const router: Router = Router();

router.route("/").get(getHandler).post(postHandler);
router.route("/:id").patch(updateHandler).delete(deleteHandler);
