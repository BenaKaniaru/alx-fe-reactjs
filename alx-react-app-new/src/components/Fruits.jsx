import React from "react";

export default function Fruits() {
  const fruits = ["apple", "mango", "banana", "pineapple"];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => {
          <li>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}
