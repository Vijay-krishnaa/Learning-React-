import React from "react";

function ChildrenProps(props) {
  return (
    <>
      <h1>{props.data}</h1>

      {props.children.map((ele) => {
        return <h1>key={ele}</h1>;
      })}
    </>
  );
}

export default ChildrenProps;
