import React from "react";
import { NavLink } from "react-router-dom";

export default function HomePage(props) {
  const colors = {
    color: props.color,
    backgroundColor: props.backgroundColor,
  };

  return (
    <div style={colors}>
      <h5>{props.title}</h5>
      <div>{props.description}</div>
      <NavLink to={`/homepages/${props.id}`}>
        <button>Go to page</button>
      </NavLink>
      <br></br>
    </div>
  );
}
