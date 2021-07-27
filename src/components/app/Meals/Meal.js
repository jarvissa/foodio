import { useContext, useRef } from "react";
import Button from "../../ui/Button";
import { CheckoutContext } from "../../../store/checkout-context";

function Meal(props) {
  const { name, description, price } = props.meal;
  const amount = useRef("");
  const ctx = useContext(CheckoutContext);

  function handleClick() {
    if (!amount.current.value) {
      return;
    }

    ctx.addItem({ ...props.meal, amount: amount.current.value });
  }

  return (
    <div className="flex flex-col gap-2 mb-5 pb-3 border-b-2 last:mb-0 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
      <div>
        <h5 className="text-lg font-bold">{name}</h5>
        <h6 className="text-sm italic">{description}</h6>
        <h5 className="text-lg font-bold text-yellow-600">${price}</h5>
      </div>

      <div className="flex justify-between items-end sm:flex-col sm:gap-2">
        <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="1"
            className="w-20 border-2 outline-none sm:w-32"
            ref={amount}
          />
        </div>
        <Button onClick={handleClick}>
          <span className="material-icons mr-1">add</span>
          <span>Add</span>
        </Button>
      </div>
    </div>
  );
}

export default Meal;
