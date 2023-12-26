import { expensesType } from "../App";
import Cancel from "./Cancel";

type PropsTypes = {
  year: string;
  month: string;
  data: expensesType;
};

const Spendings = (props: PropsTypes) => {
  const { data, month, year } = props;

  const currentExpenses = data[year].find((e) => e.month === month);
  console.log(currentExpenses);

  return (
    <div className="spendings-wrapper">
      <div id="income">
        <h2 className="center-text border-bottom padding-bottom color-green spendings-subtitle">Income</h2>
        {currentExpenses?.income.map((e) => {
          const { descritpiton, income } = e;

          return (
            <div key={income * Math.random()} id="earned" className="spending-details border-bottom">
              <p>{descritpiton}</p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p className="color-green price">+ ${income}</p>
                <button className="icon-button">
                  <Cancel color="#008800" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div id="spendings">
        <h2 className="center-text border-bottom padding-bottom color-red spendings-subtitle">Spendings</h2>
        {currentExpenses?.spendings.map((e) => {
          const { descritpiton, income } = e;

          return (
            <div key={income * Math.random()} id="spended" className="spending-details border-bottom">
              <p>{descritpiton}</p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p className="color-red price">- ${income}</p>
                <button className="icon-button">
                  <Cancel color="#880000" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spendings;
