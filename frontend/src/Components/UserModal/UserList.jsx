import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import AddUpdateUser from "./Components/AddUpdateUser";
import { Tooltip } from "@mui/material";
import AddUpdateUser from "./AddUpdateUser";
// import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min";

const UserList = () => {
  const [showUserModal, setShowUserModal] = useState(null);
  const [addUpdateActionDone, setAddUpdateActionDone] = useState(null);
  const [modelRequestData, setModelRequestData] = useState({
    Action: null,
    userKeyID: null,
  });

  useEffect(() => {
    // calllist
  }, [addUpdateActionDone]);

  const handleAddUser = () => {
    setShowUserModal(true);

    setModelRequestData((prev) => ({
      ...prev,
      Action: null,
      userKeyID: null,
    }));
  };

  const handleUpdateUser = (value) => {
    setShowUserModal(true);

    setModelRequestData((prev) => ({
      ...prev,
      Action: null,
      userKeyID: value.userKeyID,
    }));
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
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>

            <td className="d-flex justify-content-center align-items-center gap-2">
              <Tooltip title="Update">
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddUser()}
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
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>jane@example.com</td>
            <td className="d-flex justify-content-center align-items-center gap-2">
              <Tooltip title="Update">
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddUser()}
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
          <tr>
            <td>3</td>
            <td>Janny Doe</td>
            <td>janny@example.com</td>
            <td className="d-flex justify-content-center align-items-center gap-2">
              <Tooltip title="Update">
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddUser()}
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
        </tbody>
      </table>
      <AddUpdateUser
        show={showUserModal}
        onHide={() => setShowUserModal(false)}
        modelRequestData={modelRequestData}
        setAddUpdateActionDone={setAddUpdateActionDone}
      />
    </div>
  );
};

export default UserList;
