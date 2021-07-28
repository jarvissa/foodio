import React, { useState } from "react";

export const CheckoutContext = React.createContext({
  checkoutItems: [],
  addItem: function (item) {},
  editItem: function (id, type) {},
  numberOfItems: 0,
  total: 0,
});

export const CheckoutContextProvider = (props) => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  function addItem(item) {
    let isUniqueItem = true;

    checkoutItems.forEach((checkoutItem) => {
      if (checkoutItem.id === item.id) {
        isUniqueItem = false;

        setCheckoutItems((prevState) => {
          const amount = checkoutItem.amount;

          return [
            ...prevState.filter((state) => state.id !== item.id),
            { ...item, amount: item.amount + amount },
          ].sort((a, b) => b.amount - a.amount);
        });
      }
    });
    isUniqueItem &&
      setCheckoutItems((prevState) =>
        [...prevState, item].sort((a, b) => b.amount - a.amount)
      );
  }

  function editItem(id, type) {
    const item = checkoutItems.find((item) => item.id === id);

    if (type === "inc") {
      setCheckoutItems((prevState) => {
        return [
          ...prevState.filter((state) => state.id !== id),
          { ...item, amount: item.amount + 1 },
        ].sort((a, b) => b.amount - a.amount);
      });
    }

    if (type === "dec") {
      setCheckoutItems((prevState) => {
        if (item.amount === 1) {
          return [...prevState.filter((state) => state.id !== id)].sort(
            (a, b) => b.amount - a.amount
          );
        }

        return [
          ...prevState.filter((state) => state.id !== id),
          { ...item, amount: item.amount - 1 },
        ].sort((a, b) => b.amount - a.amount);
      });
    }
  }

  const numberOfItems = checkoutItems
    .map((item) => item.amount)
    .reduce((a, b) => a + b, 0);

  const total = checkoutItems
    .map((item) => item.amount * item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <CheckoutContext.Provider
      value={{ checkoutItems, addItem, editItem, numberOfItems, total }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};
