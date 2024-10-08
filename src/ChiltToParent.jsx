import React from "react";

function ChiltToParent(props) {
  let realname = "Bam chiki chiki";
  const { name, sendData } = props;
  function ClickHandle() {
    sendData(realname);
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={ClickHandle}>SendData</button>
    </div>
  );
}

export default ChiltToParent;
