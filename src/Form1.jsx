import React, { useState } from "react";

function Form1() {
  const [text, setext] = useState("");
  const [username, setusername] = useState("");

  function handlechange(e) {
    setext(e.target.value);
  }
  return (
    <>
      <h1>form</h1>
      <input type="text" id="input" value={text} onChange={handlechange} />
      <h2>userName</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
    </>
  );
}

export default Form1;
