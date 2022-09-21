import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import s from "../CalcBlock/CalckBlock.module.css";
import TypeCard from "../CategoryCard/TypeCard/TypeCard";
import { Context } from "../../index";

const MaterialSelector = () => {
  const { materialList } = useContext(Context);
  console.log({ materialList });
  return (
    <div>
      <Container>
        <Card className="text-center mt-4 shadow ">
          <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
            <div>
              <div>Выберите материал</div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Row className="d-flex justify-content-around">
              {materialList.list.map((l) => (
                <Button
                  key={l.id}
                  className="mt-3"
                  onClick={() => materialList.setSelectedMaterial(l)}
                >
                  {l.name}
                </Button>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default MaterialSelector;
