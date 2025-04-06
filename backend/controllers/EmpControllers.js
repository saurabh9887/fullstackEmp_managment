import {
  getAllEmpList as getAllEmpFromModel,
  addEmployee as createEmpInModel,
} from "../model/EmpListModal.js";

export const getAllEmployees = async (req, res) => {
  try {
    const emp = await getAllEmpFromModel();
    res.json(emp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEmployee = async (req, res) => {
  const { employeeName, employeeEmail } = req.body;

  if (!employeeName || !employeeEmail) {
    return res.status(400).json({ error: "Name, Email are required" });
  }

  try {
    const result = await createEmpInModel(employeeName, employeeEmail);
    res.status(201).json({
      message: "Employee created successfully",
      idemployees: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
