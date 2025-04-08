import express from "express";
import {
  getAllEmployees,
  createEmployee,
  getSingleEmpById,
} from "../controllers/EmpControllers.js";

const router = express.Router();

router.get("/emp", getAllEmployees);
router.post("/emp", createEmployee);
router.get("/getsingleemp", getSingleEmpById);

export default router;
