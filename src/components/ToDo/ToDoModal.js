import React, { useContext, useState } from "react";
import { Button, FormControl, Modal, Spinner } from "react-bootstrap";
import { getToDo, postToDo } from "../axios/ToDoApi";
import { Context } from "../../index";

const ToDoModal = ({ show, hide }) => {
  const [message, setMessage] = useState("");
  const { toDoStore } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [loadingRed, setLoadingRed] = useState(false);

  async function sendTask() {
    setLoading(true);
    const randomNumber = (Math.random() * 10000).toFixed();
    await postToDo(message, randomNumber).finally(() => setLoading(false));
    setLoadingRed(true);
    await getToDo()
      .then((data) => toDoStore.setToDoList(data))
      .finally(() => setLoadingRed(false));
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
          {loading ? (
            <Spinner animation="border" role="status" className={"m-auto"}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            ""
          )}
          {loadingRed ? (
            <Spinner
              animation="border"
              role="status"
              className={"m-auto"}
              variant={"danger"}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            ""
          )}
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
