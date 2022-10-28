import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  Modal,
  ToggleButton,
} from "react-bootstrap";

const CreateUserModal = ({ show, hide }) => {
  const radios = [
    { name: "Администратор", value: "1" },
    { name: "Менеджер", value: "2" },
    { name: "Заказчик", value: "3" },
    { name: "Производство", value: "4" },
  ];
  const [radioValue, setRadioValue] = useState("1");

  function setRole(e, name) {
    setRadioValue(e);
    console.log(name);
  }

  return (
    <Modal show={show} hide={hide}>
      <Modal.Header>
        <Modal.Title>
          <div style={{ textAlign: "center" }}>
            Создание нового пользователя
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          Email
          <FormControl className={"mt-2 mb-2"} />
          Пароль
          <FormControl className={"mt-2 mb-2"} />
          Отображаемое имя
          <FormControl className={"mt-2 mb-2"} />
          <div className={"d-flex flex-column"}>
            Роль
            <ButtonGroup className="mb-2 mt-2">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="warning"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRole(e.currentTarget.value, radio.name)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Close
        </Button>
        <Button variant="primary" onClick={hide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateUserModal;
