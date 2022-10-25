import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl, Modal, Spinner } from "react-bootstrap";
import { getToDo, postToDo, updateToDo } from "../axios/ToDoApi";
import { Context } from "../../index";

const ToDoEdit = ({ show, hide, task }) => {
  useEffect(() => {
    setMessage(task.message);
  }, []);

  const [edit, setEdit] = useState(false);
  const { toDoStore } = useContext(Context);

  async function editTask(number) {
    setEdit(true);
    await updateToDo(message, number);

    await getToDo()
      .then((data) => toDoStore.setToDoList(data))
      .finally(() => setEdit(false));
    hide();
  }

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
          {edit ? (
            <Spinner animation="border" role="status" className={"m-auto"}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            ""
          )}
          <Button variant="secondary" onClick={hide}>
            Отмена
          </Button>
          <Button variant="warning" onClick={() => editTask(task.randomNumber)}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ToDoEdit;
