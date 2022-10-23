import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Card } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Context } from "../../index";
import axios from "axios";
import { removeToDo } from "../axios/ToDoApi";
import ToDoModal from "./ToDoModal";
import ToDoComplete from "./ToDoComplete";

const ToDoString = observer(({ task, index }) => {
  const { toDoStore } = useContext(Context);

  const [showComplete, setShowComplete] = useState(false);

  async function completeTask(number) {
    toDoStore.setToDoList(
      toDoStore.toDoList.filter((task) => task.randomNumber !== number)
    );
    await removeToDo(number);
  }
  return (
    <Card
      className={
        "mt-3 mb-3 pt-3 pb-3 m-auto shadow-sm d-flex justify-content-evenly flex-row"
      }
      style={{ width: 600, backgroundColor: "whitesmoke" }}
    >
      <div style={{ textAlign: "center" }} className={"col-2"}>
        <h6>{"Номер"}</h6>
        <p>{index + 1}</p>
      </div>
      <div style={{ textAlign: "center" }} className={"col-5"}>
        <h6>{"Описание задачи"}</h6>
        <p>{task.message}</p>
      </div>
      {/*<div style={{ textAlign: "center" }}>*/}
      {/*  <h6>{"Выполнить"}</h6>*/}
      {/*  <AiOutlineCheckCircle*/}
      {/*    style={{ fontSize: 30, cursor: "pointer" }}*/}
      {/*    onClick={() => completeTask(task.randomNumber)}*/}
      {/*  />*/}
      {/*</div>*/}
      <div style={{ textAlign: "center" }}>
        <h6>{"Выполнение"}</h6>
        <Button onClick={() => setShowComplete(true)} variant={"success"}>
          Завершить <AiOutlineCheckCircle style={{ fontSize: 21 }} />
        </Button>
      </div>
      <ToDoComplete
        show={showComplete}
        hide={() => setShowComplete(false)}
        random={task.randomNumber}
      />
    </Card>
  );
});

export default ToDoString;
