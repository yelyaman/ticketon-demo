import express from "express";
import controller from "./controller.js";
import middlewares from "../../middlewares/index.js";

const router = express.Router();

router.get("/", middlewares.authMiddleware, controller.getList);
router.get("/:id", middlewares.authMiddleware, controller.getOne);
router.post("/", middlewares.authMiddleware, controller.create);
router.patch("/:id", middlewares.authMiddleware, controller.update);
router.delete("/delete/:id", middlewares.authMiddleware, controller.delete);

export default router;
