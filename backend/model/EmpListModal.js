import db from "../db.js";

export const getAllEmpList = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM employees", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

export const addEmployee = (employeeName, employeeEmail) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO employees (employeeName, employeeEmail) VALUES (?, ?)",
      [employeeName, employeeEmail],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

export const findEmpById = async (employeeKeyID) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM employees WHERE employeeKeyID = ?",
      [employeeKeyID],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

export const updateEmpInModel = (
  employeeKeyID,
  employeeName,
  employeeEmail
) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE employees SET employeeName = ?, employeeEmail = ? WHERE employeeKeyID = ?",
      [employeeName, employeeEmail, employeeKeyID],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

export const deleteEmp = (employeeKeyID) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM employees WHERE employeeKeyID = ?",
      [employeeKeyID],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};
