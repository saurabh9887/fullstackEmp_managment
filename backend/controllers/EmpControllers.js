import {
  getAllEmpList as getAllEmpFromModel,
  addEmployee as createEmpInModel,
  findEmpById,
  updateEmpInModel,
  deleteEmp,
} from "../model/EmpListModal.js";

export const getAllEmployees = async (req, res) => {
  try {
    const emp = await getAllEmpFromModel();
    res.json(emp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { employeeKeyID } = req.query;

    if (!employeeKeyID) {
      return res.status(400).json({ error: "employeeKeyID is required" });
    }

    const result = await deleteEmp(employeeKeyID);
    res.json({ message: "Employee deleted successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleEmpById = async (req, res) => {
  const { employeeKeyID } = req.query; // 👈 use req.query instead of req.body

  if (!employeeKeyID) {
    return res.status(400).json({ error: "employeeKeyID was not supplied" });
  }

  try {
    const emp = await findEmpById(employeeKeyID);
    res.json(emp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEmployee = async (req, res) => {
  const { employeeKeyID, employeeName, employeeEmail } = req.body;
  // console.log(
  //   req.body.employeeKeyID,
  //   req.body.employeeName,
  //   req.body.employeeEmail
  // );

  if (!employeeName || !employeeEmail) {
    return res.status(400).json({ error: "Name and Email are required" });
  }

  try {
    if (employeeKeyID !== null) {
      // Try to find if this employee exists
      const existingEmp = await findEmpById(employeeKeyID); // ← You'll define this in your model
      if (existingEmp) {
        console.log(existingEmp);
        // Update existing employee
        await updateEmpInModel(employeeKeyID, employeeName, employeeEmail);
        return res
          .status(200)
          .json({ message: "Employee updated successfully" });
      }
    }

    // If empKeyID is null or not found, create new employee
    const result = await createEmpInModel(employeeName, employeeEmail);
    res.status(201).json({
      message: "Employee created successfully",
      idemployees: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
