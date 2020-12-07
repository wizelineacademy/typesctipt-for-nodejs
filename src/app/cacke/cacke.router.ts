  
import { Router } from "express";
import { handler as getHandler }  from "./handlers/get.handler";
import { handler as postHandler }  from "./handlers/post.handler";

export const router: Router = Router();

router.route('/cackes')
      .get(getHandler)
      .post(postHandler);

router.route('/cackes/:id')
      .get(getHandler)
      .patch(postHandler);
