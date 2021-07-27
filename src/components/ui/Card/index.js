function Card(props) {
  const className = `rounded-xl shadow ${props.className}`;

  return <div className={className}>{props.children}</div>;
}

export default Card;
