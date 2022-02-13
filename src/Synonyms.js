import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <strong>Synonyms:</strong>
        <ul className="synonym">
          {props.synonyms.map(function (synonym, index) {
            if (synonym) {
              return <li key={index}>{synonym}</li>;
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
