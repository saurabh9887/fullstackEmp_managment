import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Error_Message } from "../GlobalError";
import {
  AddUpdateEmployeeAPI,
  GetSingleEmployeeByIDAPI,
} from "../../Services/Employees/EmployeeAPI";
import SuccessPopUp from "../SuccessPopUp";

const AddUpdateUser = ({
  show,
  onHide,
  modelRequestData,
  setAddUpdateActionDone,
  closeAll,
}) => {
  const [error, setError] = useState();
  const [showSuccessPopUp, setShowSuccessPopUp] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [userObj, setUserObj] = useState({
    name: null,
    email: null,
    employeeKeyID: null,
  });

  useEffect(() => {
    if (
      modelRequestData.employeeKeyID !== null &&
      modelRequestData.employeeKeyID !== undefined &&
      modelRequestData.employeeKeyID !== ""
    ) {
      GetSingleEmployeeByID(modelRequestData.employeeKeyID);
    }
  }, [modelRequestData.employeeKeyID]);

  const handleAddUpdateUser = () => {
    let isValid = false;
    if (
      userObj.name === null ||
      userObj.name === undefined ||
      userObj.name === "" ||
      userObj.email === null ||
      userObj.email === undefined ||
      userObj.email === ""
    ) {
      isValid = true;
      setError(true);
    }

    const api_params = {
      employeeName: userObj.name,
      employeeEmail: userObj.email,
      employeeKeyID: modelRequestData.employeeKeyID,
    };

    if (!isValid) {
      AddUpdateUserData(api_params);
    }
  };

  const AddUpdateUserData = async (api_params) => {
    debugger;
    try {
      const res = await AddUpdateEmployeeAPI(api_params);
      if (res) {
        setSuccessMsg(
          modelRequestData.employeeKeyID === null
            ? "Employee added successfully!"
            : "Employee updated successfully!"
        );
        setShowSuccessPopUp(true);
        setAddUpdateActionDone(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get Single Employee
  const GetSingleEmployeeByID = async (id) => {
    debugger;
    try {
      const res = await GetSingleEmployeeByIDAPI(id);
      if (res.status === 200) {
        console.log(res);
        const modelData = res.data[0];
        setUserObj((prev) => ({
          ...prev,
          name: modelData.employeeName,
          email: modelData.employeeEmail,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setInitialData = () => {
    setError(false);
    setUserObj((prev) => ({
      ...prev,
      name: null,
      email: null,
    }));
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        onHide();
        setInitialData();
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {modelRequestData.Action === null ? "Add User" : "Update User"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                value={userObj.name}
                onChange={(e) => {
                  let inputVal = e.target.value;
                  if (inputVal.startsWith(" ")) {
                    inputVal = inputVal.trimStart();
                  }

                  setUserObj((prev) => ({
                    ...prev,
                    name: inputVal,
                  }));
                }}
              />
              {error &&
              (userObj.name === "" ||
                userObj.name === null ||
                userObj.name === undefined) ? (
                <span className="text-danger">{Error_Message}</span>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                value={userObj.email}
                onChange={(e) => {
                  let inputVal = e.target.value;
                  if (inputVal.startsWith(" ")) {
                    inputVal = inputVal.trimStart();
                  }

                  setUserObj((prev) => ({
                    ...prev,
                    email: inputVal,
                  }));
                }}
              />
              {error &&
              (userObj.email === "" ||
                userObj.email === null ||
                userObj.email === undefined) ? (
                <span className="text-danger">{Error_Message}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            onHide();
            setInitialData();
          }}
        >
          Close
        </Button>
        <Button variant="primary" onClick={handleAddUpdateUser}>
          Submit
        </Button>
      </Modal.Footer>
      {showSuccessPopUp && (
        <SuccessPopUp
          show={showSuccessPopUp}
          onHide={() => setShowSuccessPopUp(false)}
          successMsg={successMsg}
          onConfirm={closeAll}
        />
      )}
    </Modal>
  );
};

export default AddUpdateUser;
