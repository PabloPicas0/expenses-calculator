import { useState } from "react";
import "./App.scss";

import Options from "./Components/Options";
import Spendings from "./Components/Spendings";
import Title from "./Components/Title";

export type expensesType = {
  [year: number | string]:
    | {
        month: string;
        income: {
          descritpiton: string;
          income: number;
        }[];
        spendings: {
          descritpiton: string;
          income: number;
        }[];
      }[]
    | [];
};

const storage = localStorage.getItem("expensesData");

const expensesData: expensesType =
  storage !== null
    ? JSON.parse(storage)
    : {
        [new Date().getFullYear()]: [
          {
            month: new Date().toLocaleDateString("en-GB", { month: "short" }),
            income: [],
            spendings: [],
          },
        ],
      };

function App() {
  const [data, setData] = useState(expensesData);
  const [year, setYear] = useState(`${new Date().getFullYear()}`);
  const [month, setMonth] = useState(new Date().toLocaleDateString("en-US", { month: "short" }));

  console.log(data);
  return (
    <>
      <Title year={year} month={month} data={data} />
      <Options
        year={year}
        month={month}
        setData={setData}
        data={data}
        setYear={setYear}
        setMonth={setMonth}
      />
      <Spendings year={year} month={month} data={data} />
    </>
  );
}

export default App;
