import { Router } from "express";
import { handler as getHandler } from "./cakeHandler/get.handler";
import { handler as postHandler } from "./cakeHandler/post.handler";
import { handler as updateHandler } from "./cakeHandler/patch.handler";
import { handler as deleteHandler } from "./cakeHandler/delete.handler";

export const router: Router = Router();

router.route("/").get(getHandler).post(postHandler);
router.route("/:id").patch(updateHandler).delete(deleteHandler);
