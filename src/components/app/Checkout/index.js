import Dialog from "../../ui/Dialog";
import Button from "../../ui/Button";
import CheckoutItem from "./CheckoutItem";
import {
  CheckoutContext,
  CheckoutContextProvider,
} from "../../../store/checkout-context";
import { useContext } from "react";

function Checkout(props) {
  const ctx = useContext(CheckoutContext);

  return (
    <CheckoutContextProvider>
      <Dialog
        state={props.state}
        title="Checkout"
        onChangeState={props.onChangeState}
      >
        <main className="mt-5">
          {ctx.checkoutItems.map((item) => (
            <CheckoutItem item={item} key={item.id}></CheckoutItem>
          ))}
        </main>

        <footer className="flex justify-end mt-4 gap-2">
          <Button color="red" shade="500" text onClick={props.onChangeState}>
            <span>Cancel</span>
          </Button>
          <Button>
            <span>Order</span>
          </Button>
        </footer>
      </Dialog>
    </CheckoutContextProvider>
  );
}

export default Checkout;
