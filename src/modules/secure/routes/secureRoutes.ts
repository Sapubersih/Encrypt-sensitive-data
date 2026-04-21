import express from "express";
import {
  saveSecretController,
  getSecretController,
} from "../controllers/secureController";

const router = express.Router();

router.post("/save", saveSecretController);
router.get("/:id", getSecretController);

export default router;
