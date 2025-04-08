import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

const SuccessPopUp = ({ show, onHide, successMsg, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>{successMsg}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onConfirm}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={onConfirm}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessPopUp;
