import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../Card";

function Dialog(props) {
  function handleClick(e) {
    if (e.target.classList.value.includes("overlay")) {
      props.onChangeState();
    }
  }

  return props.state ? (
    ReactDOM.createPortal(
      <div
        className="overlay fixed inset-0 z-50 bg-black bg-opacity-50 transition-all"
        onClick={handleClick}
      >
        <Card className="absolute w-11/12 max-w-lg top-1/2 left-1/2 p-5 transform -translate-x-1/2 -translate-y-1/2 bg-white">
          <header className="text-2xl font-bold text-center">
            {props.title}
          </header>

          {props.children}
        </Card>
      </div>,
      document.getElementById("dialogs")
    )
  ) : (
    <Fragment></Fragment>
  );
}

export default Dialog;
