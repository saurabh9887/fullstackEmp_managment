import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import AddUpdateUser from "./Components/AddUpdateUser";
import { Tooltip } from "@mui/material";
import AddUpdateUser from "./AddUpdateUser";
import { GetEmployeeListAPI } from "../../Services/Employees/EmployeeAPI";
// import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min";

const UserList = () => {
  const [showUserModal, setShowUserModal] = useState(null);
  const [addUpdateActionDone, setAddUpdateActionDone] = useState(null);
  const [emplist, setEmpList] = useState([]);
  const [modelRequestData, setModelRequestData] = useState({
    Action: null,
    employeeKeyID: null,
  });

  useEffect(() => {
    GetEmployeeList();
  }, []);

  useEffect(() => {
    GetEmployeeList();
  }, [addUpdateActionDone]);

  // Get Employee list
  const GetEmployeeList = async () => {
    // debugger;
    try {
      const res = await GetEmployeeListAPI();
      if (res.status === 200) {
        setEmpList(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddUser = () => {
    setShowUserModal(true);

    setModelRequestData((prev) => ({
      ...prev,
      Action: null,
      employeeKeyID: null,
    }));
  };

  const handleUpdateUser = (value) => {
    setShowUserModal(true);

    setModelRequestData((prev) => ({
      ...prev,
      Action: 'update',
      employeeKeyID: value.employeeKeyID,
    }));
  };

  const closeAll = () => {
    setShowUserModal(false);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">User Table</h4>
        <Tooltip title="Add Employee">
          <button className="btn btn-primary" onClick={() => handleAddUser()}>
            + Add Employee
          </button>
        </Tooltip>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Sr. no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emplist.map((item, index) => (
            <tr key={index}>
              <td>{item.idemployees}</td>
              <td>{item.employeeName}</td>
              <td>{item.employeeEmail}</td>

              <td className="d-flex justify-content-center align-items-center gap-2">
                <Tooltip title="Update">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdateUser(item)}
                  >
                    Update
                  </button>
                </Tooltip>
                <Tooltip title="Delete">
                  <button
                    className="btn btn-secondary"
                    //   onClick={() => handleAddUser()}
                  >
                    Delete
                  </button>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddUpdateUser
        show={showUserModal}
        onHide={() => setShowUserModal(false)}
        modelRequestData={modelRequestData}
        setAddUpdateActionDone={setAddUpdateActionDone}
        closeAll={closeAll}
      />
    </div>
  );
};

export default UserList;
