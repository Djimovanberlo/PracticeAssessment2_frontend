import React from "react";

export default function SinglePage(props) {
  // console.log("proper", props);
  return (
    <div>
      <h5>{props.name}</h5>
      <div>{props.content}</div>
      <div>{props.createdAt}</div>
      <br></br>
    </div>
  );
}
