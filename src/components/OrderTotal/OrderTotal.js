import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const OrderTotal = observer(() => {
  const { order } = useContext(Context);
  const [total, setTotal] = useState("0");
  useEffect(() => {
    setTotal(
      order.order.reduce(function (sum, order) {
        return sum + order.totalCost;
      }, 0)
    );
  }, [order.order]);
  return <div>Итого в заказе:{total} рублей</div>;
});

export default OrderTotal;
