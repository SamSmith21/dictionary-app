import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <strong>Example: </strong>
        <span className="example fst-italic">{props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}
