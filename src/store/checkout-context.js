import React, { useState } from "react";

export const CheckoutContext = React.createContext({
  checkoutItems: [],
  addItem: function (item) {},
});

export const CheckoutContextProvider = (props) => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  function addItem(item) {
    console.log(item);
    setCheckoutItems((prevState) => [item, ...prevState]);
  }

  return (
    <CheckoutContext.Provider value={{ checkoutItems, addItem }}>
      {props.children}
    </CheckoutContext.Provider>
  );
};
