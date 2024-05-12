import { Router } from "express";
import { GuestController } from "./controllers/guest-controller";

const router = Router();
const controller = new GuestController();

router.get("/list", controller.list);
router.post("/create", controller.create);
router.put("/confirm", controller.confirm);

export { router };
