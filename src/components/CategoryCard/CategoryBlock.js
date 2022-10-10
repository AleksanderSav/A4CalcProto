import React, { useContext } from "react";
import { Paper } from "@mui/material";
import { Row, Col, Card } from "react-bootstrap";
import TypeCard from "./TypeCard/TypeCard";
import {
  INT_PRINT,
  INT_PRINT_CALC,
  INT_PRINT_CUT,
} from "../../routeConst/routeConst";
import { useLocation } from "react-router-dom";
import s from "../CalcBlock/CalckBlock.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Context } from "../../index";
const CategoryBlock = () => {
  const { materialList } = useContext(Context);

  const location = useLocation();

  return (
    <Card className="text-center mt-4 mb-4 shadow ">
      <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
        <div className={s.block}>
          <div>Выберите категорию</div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Row className="d-flex justify-content-around">
          {materialList.category.map((cat) => (
            <Col className="col-4 mt-3" key={cat.name}>
              <TypeCard
                name={cat.name}
                path={cat.path}
                text={cat.text}
                imgLink={cat.imgLink}
              />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CategoryBlock;
