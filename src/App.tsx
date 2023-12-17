import "./App.scss";

import Options from "./Components/Options";
import Spendings from "./Components/Spendings";

function App() {
  const currentYear = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  return (
    <>
      <h1>Budget available in {currentYear}</h1>
      <Options />

      <Spendings>
        {[...new Array(10)].map((e, idx) => {
          return <div>{idx}</div>;
        })}
      </Spendings>
    </>
  );
}

export default App;
