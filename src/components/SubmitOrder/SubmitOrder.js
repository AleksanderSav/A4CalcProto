import React, { useContext, useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const SubmitOrder = observer(() => {
  const { order } = useContext(Context);

  const [totalCost, setTotalCost] = useState("0");
  useEffect(() => {
    setTotalCost(
      order.order.reduce(function (sum, order) {
        return sum + order.totalCost;
      }, 0)
    );
  }, [order.order]);

  return (
    <div>
      <Card className="mt-5">
        <Card.Header style={{ textAlign: "center" }}>
          <h4>Подтверждение заказа</h4>
        </Card.Header>
        <div className="mt-4 m-auto">
          <Table
            striped
            bordered
            hover
            size="sm"
            style={{ width: 500, textAlign: "center" }}
          >
            <tbody>
              {order.order.map((order, index) => (
                <tr key={order.random}>
                  <td>{index + 1}</td>
                  <td>{order.orderCategory}</td>
                  <td>
                    {order.width}x{order.height} м
                  </td>
                  <td>{order.count} шт</td>
                  <td>{order.totalCost} р</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}></td>
                <td style={{ fontWeight: 600 }}>Итого</td>
                <td style={{ fontWeight: 600 }}>{totalCost} р</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  );
});

export default SubmitOrder;
