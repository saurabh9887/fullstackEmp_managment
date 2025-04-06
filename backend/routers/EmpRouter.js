import express from "express";
import {
  getAllEmployees,
  createEmployee,
} from "../controllers/EmpControllers.js";

const router = express.Router();

router.get("/emp", getAllEmployees);
router.post("/emp", createEmployee);

export default router;
