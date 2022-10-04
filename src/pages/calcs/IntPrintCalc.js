import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import TopStepper from "../../components/TopStepper/TopStepper";
import TopBreadCrumbs from "../../components/TopBreadCrumbs/TopBreadCrumbs";
import CategoryBlock from "../../components/CategoryCard/CategoryBlock";
import React, { useContext } from "react";
import CalcBlock from "../../components/CalcBlock/CaclBlock";
import OrderListBlock from "../../components/OrderListBlock/OrderListBlock";
import { Context } from "../../index";
import MaterialSelector from "../../components/MaterialSelector/MaterialSelector";
import MaterialList from "../../components/MateriaList/MaterialList";
import NewMaterialSelector from "../../components/NewMaterialSelector/NewMaterialSelector";
import AdditionalBlock from "../../components/AdditionalBlock/AdditionalBlock";

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
          <NewMaterialSelector />
          <AdditionalBlock />
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
