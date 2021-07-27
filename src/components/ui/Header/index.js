import { Fragment, useState } from "react";
import Checkout from "../../app/Checkout";

function Header() {
  const [checkoutState, setCheckoutState] = useState(false);

  function handleClick() {
    setCheckoutState(true);
  }

  function changeState() {
    setCheckoutState(!checkoutState);
  }

  return (
    <Fragment>
      <header className="flex flex-col justify-center items-center gap-4 px-5 py-2.5 bg-yellow-600 text-white sm:flex-row sm:justify-between sm:gap-0">
        <h1 className="text-4xl font-bold">Foodio</h1>
        <div
          className="flex justify-center items-center px-10 py-3 rounded-3xl bg-yellow-800 font-bold"
          onClick={handleClick}
        >
          <span className="material-icons mr-2">shopping_cart</span>
          <span className="mr-3">Your cart</span>
          <span className="px-3 rounded-xl bg-yellow-600">0</span>
        </div>
      </header>

      {checkoutState && (
        <Checkout state={checkoutState} onChangeState={changeState}></Checkout>
      )}
    </Fragment>
  );
}

export default Header;
