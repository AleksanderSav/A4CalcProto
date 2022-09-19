import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import TopStepper from "../../components/TopStepper/TopStepper";
import TopBreadCrumbs from "../../components/TopBreadCrumbs/TopBreadCrumbs";
import CategoryBlock from "../../components/CategoryCard/CategoryBlock";
import React from "react";
import CalcBlock from "../../components/CalcBlock/CaclBlock";
import OrderListBlock from "../../components/OrderListBlock/OrderListBlock";

const IntPrintCalc = () => {
  return (
    <Container>
      <Row>
        <Col className="col-3 mt-4">
          <SideBar />
        </Col>
        <Col className="col-9 mt-4">
          <TopStepper />
          <TopBreadCrumbs />
          <CalcBlock />
          <OrderListBlock />
        </Col>
      </Row>

      {/*<CalcBlock />*/}
      {/*<OrderListBlock />*/}
    </Container>
  );
};

export default IntPrintCalc;