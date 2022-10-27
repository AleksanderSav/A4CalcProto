import React from "react";
import { Container } from "react-bootstrap";
import PriceList from "../components/AdminPanel/PriceList";
import { observer } from "mobx-react-lite";

const AdminPanel = observer(() => {
  return (
    <Container>
      <PriceList />
    </Container>
  );
});

export default AdminPanel;
