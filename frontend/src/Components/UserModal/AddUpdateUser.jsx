import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Error_Message } from "../GlobalError";

const AddUpdateUser = ({ show, onHide, modelRequestData }) => {
  const [error, setError] = useState();
  const [userObj, setUserObj] = useState({
    name: null,
    email: null,
  });

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
      name: userObj.name,
      email: userObj.email,
    };

    if (!isValid) {
      AddUpdateUserData(api_params);
    }
  };

  const AddUpdateUserData = async (api_params) => {
    console.log(api_params);
    // try {
    //   const response = await api_call(api_params);
    // } catch (error) {
    //   console.log(error);
    // }
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
    </Modal>
  );
};

export default AddUpdateUser;
