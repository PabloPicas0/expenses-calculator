import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  const currentYear = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  return (
    <>
      <h1>Budget available in {currentYear}</h1>
    </>
  );
}

export default App;
