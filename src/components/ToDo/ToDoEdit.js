import React, { useEffect, useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

const ToDoEdit = ({ show, hide, task }) => {
  useEffect(() => {
    setMessage(task.message);
  }, []);

  const [message, setMessage] = useState("");

  return (
    <div>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Редактирование задачи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Отредактируйте текст
          <FormControl
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Отмена
          </Button>
          <Button variant="warning">Да</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ToDoEdit;
