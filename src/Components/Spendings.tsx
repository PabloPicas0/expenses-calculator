import { expensesType } from "../App";
import Cancel from "../assets/Cancel";

type SpendingsPropsTypes = {
  year: string;
  month: string;
  data: expensesType;
  setData: React.Dispatch<React.SetStateAction<expensesType>>;
};

type DeleteBtnIdTypes = [string, "income" | "spendings", string];

const Spendings = (props: SpendingsPropsTypes) => {
  const { data, month, year, setData } = props;

  const currentExpenses = data[year].find((e) => e.month === month);
  const [currentMonth, currentYear] = new Date()
    .toLocaleDateString("en-GB", { month: "short", year: "numeric" })
    .split(" ");

  const isDisabled = month !== currentMonth || year !== currentYear;

  const handleDelte = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const [_, transactionType, index] = e.currentTarget.id.split("-") as DeleteBtnIdTypes;

    setData((prevData) => {
      const newData: expensesType = {
        ...prevData,
        [year]: JSON.parse(JSON.stringify(data[year])),
      };

      const currentTransaction = newData[year].find((e) => e.month === month);

      if (!currentTransaction) return prevData;

      currentTransaction[transactionType].splice(Number(index), 1);

      localStorage.setItem("expensesData", JSON.stringify(newData));

      return newData;
    });
  };

  return (
    <div className="spendings-wrapper">
      <div id="income">
        <h2 className="center-text border-bottom padding-bottom color-green spendings-subtitle">Income</h2>
        {currentExpenses?.income.map((currentIncome, index) => {
          const { descritpiton, income } = currentIncome;

          return (
            <div key={income * Math.random()} id="earned" className="spending-details border-bottom">
              <p>{descritpiton}</p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p className="color-green price">+ ${income}</p>
                <button
                  id={`delte-income-${index}`}
                  className="icon-button delete-btn"
                  onClick={handleDelte}
                  disabled={isDisabled}>
                  <Cancel color={isDisabled ? "grey" : "#008800"} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div id="spendings">
        <h2 className="center-text border-bottom padding-bottom color-red spendings-subtitle">Spendings</h2>
        {currentExpenses?.spendings.map((currentSpending, index) => {
          const { descritpiton, income } = currentSpending;

          return (
            <div key={income * Math.random()} id="spended" className="spending-details border-bottom">
              <p>{descritpiton}</p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p className="color-red price">- ${income}</p>
                <button
                  id={`delete-spendings-${index}`}
                  className="icon-button delete-btn"
                  onClick={handleDelte}
                  disabled={isDisabled}>
                  <Cancel color={isDisabled ? "grey" : "#880000"} />
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
