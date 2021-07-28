import Dialog from "../../ui/Dialog";
import Button from "../../ui/Button";
import CheckoutItem from "./CheckoutItem";
import { CheckoutContext } from "../../../store/checkout-context";
import { useContext } from "react";

function Checkout(props) {
  const ctx = useContext(CheckoutContext);

  function handleClick() {
    console.log("Coming soon");
  }

  return (
    <Dialog
      state={props.state}
      title="Checkout"
      onChangeState={props.onChangeState}
    >
      <main className="mt-5">
        {ctx.checkoutItems.length === 0 && (
          <div className="p-4 bg-red-500 text-white font-bold rounded-xl text-center">
            Your cart is empty!
          </div>
        )}
        {ctx.checkoutItems.map((item) => (
          <CheckoutItem item={item} key={item.id}></CheckoutItem>
        ))}
      </main>

      {ctx.checkoutItems.length > 0 && (
        <footer className="mt-4">
          <div className="flex justify-between mb-4 text-xl font-bold">
            <span>Total:</span>
            <span>≈ ${Math.round(ctx.total)}</span>
          </div>
          <div className="flex justify-end gap-2">
            <Button color="red" shade="500" text onClick={props.onChangeState}>
              <span>Cancel</span>
            </Button>
            <Button onClick={handleClick}>
              <span>Order</span>
            </Button>
          </div>
        </footer>
      )}
    </Dialog>
  );
}

export default Checkout;
