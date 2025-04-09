import express from "express";
import {
  getAllEmployees,
  createEmployee,
  getSingleEmpById,
  deleteEmployee
} from "../controllers/EmpControllers.js";

const router = express.Router();

router.get("/emp", getAllEmployees);
router.post("/emp", createEmployee);
router.get("/getsingleemp", getSingleEmpById);
router.delete("/deleteemp", deleteEmployee);

export default router;
