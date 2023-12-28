import { expensesType } from "../../App";
import { formatCurrency, sum } from "../../utils";

type TitlePropsTypes = {
  data: expensesType;
  month: string;
  year: string;
};

const Title = (props: TitlePropsTypes) => {
  const { data, month, year } = props;

  const selectedDate = new Date(`${year}-${month}-01`).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const selectedData = data[year].filter((e) => e.month === month)[0];
  const totalIncome = sum(selectedData.income);
  const totalSpendings = sum(selectedData.spendings);

  const totalBalance = formatCurrency(totalIncome - totalSpendings);
  const currentIncome = formatCurrency(totalIncome);
  const currentSpendings = formatCurrency(totalSpendings);

  return (
    <header className="header">
      <h1>
        Budget available in {selectedDate}
        <br />
        <span
          style={{
            color:
              totalIncome - totalSpendings > 0
                ? "green"
                : totalIncome - totalSpendings < 0
                ? "red"
                : "rgba(255, 255, 255, 0.87)",
          }}>
          {" "}
          {totalBalance}{" "}
        </span>
      </h1>

      <div style={{ maxWidth: "420px", margin: "10px auto 0px auto" }}>
        <div className="header-income-wrapper spending-details">
          <p>Income</p>
          <p>+ {currentIncome}</p>
        </div>

        <div className="header-expenses-wrapper spending-details">
          <p>Expenses</p>
          <p>- {currentSpendings}</p>
        </div>
      </div>
    </header>
  );
};

export default Title;
