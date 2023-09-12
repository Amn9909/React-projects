import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  const colors = ["red", "blue", "purple", "olive", "pink"];

  // Added 'const' before 'handleClick'
  const handleClick = (col) => {
    console.log("Clicked: ", col);
    setColor(col); // Update the color state when a button is clicked
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="color-bar">
        <div>
          <ul className="gap-3 px-2">
            {colors.map((col) => (
              <button key={col} onClick={() => handleClick(col)}>
                {col}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
