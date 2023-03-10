import React, { useRef, useState } from "react";

function StoreCurrentStateUserRef() {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  const handleChange = (e) => {
    setText(e.target.value);
    textRef.current = e.target.value;
  };

  const handleSend = () => {
    setTimeout(() => {
      alert("시간 초과와 같은 비동기 작업에서 state :" + text);
      alert("state 값을 ref로 수동 업데이트: " + textRef.current);
    }, 3000);
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}

export default StoreCurrentStateUserRef;
