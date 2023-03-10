import { useState } from "react";
import FilterableProductTable from "./CategoryRow/FilterableProductTable";
import { PRODUCTS } from "./CategoryRow/PRODUCTS";
import Picture from "./ChangeClass/Picture";
import Picture2 from "./ChangeClass/Picture2";
import ImageApp from "./ImageSizeContext/ImageApp";
import MessengerApp from "./MessengerWithReducer/MessengerApp";
import Toolbar from "./ReuseButton/Toolbar";
import Game from "./TicTacToe/Game";
import TaskApp from "./TodolistReducerContext/TaskApp";

function App() {
  const [section, setSection] = useState("1");

  return (
    <div className="App">
      <nav>
        {Array.from(Array(8), (_, i) => i + 1).map((li) => (
          <>
            <span>
              <button onClick={(e) => setSection(e.target.innerText)}>
                {li}
              </button>
            </span>
          </>
        ))}
      </nav>
      {section === "1" && <Toolbar />}
      {section === "2" && <FilterableProductTable products={PRODUCTS} />}
      {section === "3" && <Game />}
      {section === "4" && <Picture />}
      {section === "5" && <Picture2 />}
      {section === "6" && <MessengerApp />}
      {section === "7" && <ImageApp />}
      {section === "8" && <TaskApp />}
    </div>
  );
}

export default App;
