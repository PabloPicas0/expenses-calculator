import "./App.scss";

import Options from "./Components/Options";
import Spendings from "./Components/Spendings";
import Title from "./Components/Title";

function App() {
  const data = [...new Array(10)].map((e, idx) => idx);

  return (
    <>
      <Title />
      <Options />
      <Spendings data={data} />
    </>
  );
}

export default App;
