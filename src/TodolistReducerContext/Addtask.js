import React, { useContext, useState } from "react";
import { TasksDispatchContext } from "./Context";

let nextId = 3;

function Addtask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <input
        placeholder="할 일 추가"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text,
          });
        }}
      >
        추가
      </button>
    </>
  );
}

export default Addtask;
