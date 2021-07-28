import { useContext } from "react";
import { CheckoutContext } from "../../../store/checkout-context";

function CheckoutItem(props) {
  const ctx = useContext(CheckoutContext);

  function handleClick(id, type) {
    ctx.editItem(id, type);
  }

  return (
    <div className="flex justify-between items-center mb-5 pb-3 border-b-2 border-yellow-600">
      <div>
        <h4 className="mb-2 text-xl font-bold">{props.item.name}</h4>
        <div className="flex items-center gap-2">
          <h6 className="text-yellow-600 font-bold">${props.item.price}</h6>
          <div className="px-2 py-0.5 text-sm font-bold border-2 rounded-md">
            x {props.item.amount}
          </div>
        </div>
      </div>

      <div className="sm:flex sm:gap-2">
        <div
          className="mb-2 px-4 text-yellow-600 text-center border-2 border-yellow-600 font-bold cursor-pointer select-none transition-all sm:mb-0 hover:bg-yellow-600 hover:text-white"
          onClick={() => handleClick(props.item.id, "dec")}
        >
          -
        </div>
        <div
          className="px-4 text-yellow-600 text-center border-2 border-yellow-600 font-bold cursor-pointer select-none transition-all hover:bg-yellow-600 hover:text-white"
          onClick={() => handleClick(props.item.id, "inc")}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
