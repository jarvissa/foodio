import { Fragment, useContext, useEffect, useState } from "react";
import Checkout from "../../app/Checkout";
import { CheckoutContext } from "../../../store/checkout-context";

function Header() {
  const [checkoutState, setCheckoutState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const ctx = useContext(CheckoutContext);

  const cartClassName = `flex justify-center items-center px-10 py-3 rounded-3xl bg-yellow-800 font-bold cursor-pointer ${
    cartState ? "animate-bouncy" : ""
  }`;

  useEffect(() => {
    if (ctx.numberOfItems === 0) {
      return;
    }

    setCartState(true);

    const timer = setTimeout(() => {
      setCartState(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.numberOfItems]);

  function handleClick() {
    setCheckoutState(true);
  }

  function changeState() {
    setCheckoutState(!checkoutState);
  }

  return (
    <Fragment>
      <header className="fixed z-10 w-full flex flex-col justify-center items-center gap-4 px-5 py-2.5 bg-yellow-600 text-white sm:flex-row sm:justify-between sm:gap-0">
        <h1 className="text-4xl font-bold">Foodio</h1>
        <div className={cartClassName} onClick={handleClick}>
          <span className="material-icons mr-2">shopping_cart</span>
          <span className="mr-3">Your cart</span>
          <span className="px-3 rounded-xl bg-yellow-600">
            {ctx.numberOfItems}
          </span>
        </div>
      </header>

      {checkoutState && (
        <Checkout state={checkoutState} onChangeState={changeState}></Checkout>
      )}
    </Fragment>
  );
}

export default Header;
