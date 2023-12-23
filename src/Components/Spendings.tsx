import { expensesType } from "../App";

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
        <h2 className="center-text border-bottom padding-bottom color-green">Income</h2>
        {currentExpenses?.income.map((e) => {
          const { descritpiton, income } = e;

          return (
            <div key={income * Math.random()} id="earned" className="spending-details border-bottom">
              <p>{descritpiton}</p>
              <p className="color-green">+ ${income}</p>
            </div>
          );
        })}
      </div>

      <div id="spendings">
        <h2 className="center-text border-bottom padding-bottom color-red">Spendings</h2>
        {currentExpenses?.spendings.map((e) => {
          const { descritpiton, income } = e;

          return (
            <div key={income * Math.random()} id="spended" className="spending-details border-bottom">
              <p>{descritpiton}</p>
              <p className="color-red">- ${income}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spendings;
