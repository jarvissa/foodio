function Button(props) {
  const color = props.color ? props.color : "yellow";
  const shade = props.shade ? props.shade : 600;

  let className = `flex px-6 py-1 rounded-2xl bg-${color}-${shade} text-white transition-all hover:bg-${color}-${
    shade + 100
  }`;

  if (props.text) {
    className = `flex px-6 py-1 rounded-2xl bg-white text-${color}-${shade} transition-all hover:bg-${color}-100`;
  }

  return (
    <button
      type={props.type ? props.type : "button"}
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
