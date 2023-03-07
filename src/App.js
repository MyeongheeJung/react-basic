import { useState } from "react";
import FilterableProductTable from "./CategoryRow/FilterableProductTable";
import { PRODUCTS } from "./CategoryRow/PRODUCTS";
import Toolbar from "./ReuseButton/Toolbar";
import Game from "./TicTacToe/Game";

function App() {
  const [section, setSection] = useState("1");

  return (
    <div className="App">
      <nav>
        {Array.from(Array(3), (_, i) => i + 1).map((li) => (
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
    </div>
  );
}

export default App;
