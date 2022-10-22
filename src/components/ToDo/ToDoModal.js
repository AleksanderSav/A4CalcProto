import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { postToDo } from "../axios/ToDoApi";

const ToDoModal = ({ show, hide }) => {
  const [message, setMessage] = useState("");

  async function sendTask() {
    const randomNumber = (Math.random() * 10000).toFixed();
    const res = await postToDo(message, randomNumber);
    setMessage("");
    hide();
  }
  return (
    <div>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Создать задачу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button variant="primary" onClick={sendTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ToDoModal;
