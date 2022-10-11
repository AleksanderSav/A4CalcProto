import React, { useContext, useEffect } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const OrderTotal = observer(() => {
  const { order } = useContext(Context);
  let totalPrice;
  useEffect(() => {
    totalPrice = order.order.reduce(function (sum, order) {
      return sum + order.totalCost;
    }, 0);
    console.log("work");
    console.log(totalPrice);
  }, [order.order]);
  return <div>`${totalPrice}`</div>;
});

export default OrderTotal;
