import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { getToDo } from "../components/axios/ToDoApi";
import ToDoModal from "../components/ToDo/ToDoModal";

const TodoPage = () => {
  async function getTodo() {
    const res = await getToDo();
    console.log(res);
  }

  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Container>
        <Card className={"mt-5"} style={{ textAlign: "center" }}>
          <Card.Header>
            <h4>Список задач</h4>
            <Button variant={"warning"} onClick={getTodo}>
              test
            </Button>
          </Card.Header>
          <Button
            variant={"warning"}
            className={"mt-3 mb-3 m-auto"}
            style={{ width: 300 }}
            onClick={() => setShowModal(true)}
          >
            Добавить новую задачу
          </Button>
          <ToDoModal show={showModal} hide={() => setShowModal(false)} />
        </Card>
      </Container>
    </div>
  );
};

export default TodoPage;
