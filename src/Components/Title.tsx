import { expensesType } from "../App";

type TitlePropsTypes = {
  data: expensesType;
  month: string;
  year: string;
};

const Title = (props: TitlePropsTypes) => {
  const { data, month, year } = props;

  const currentDate = new Date(`${year}-${month}-01`).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const selectedData = data[year].filter((e) => e.month === month)[0];
  const totalIncome = selectedData.income.reduce((acc, data) => acc + data.income, 0);
  const totalSpendings = selectedData.spendings.reduce((acc, data) => acc + data.income, 0);

  return (
    <header className="header">
      <h1>
        Budget available in {currentDate}
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
          $ {totalIncome - totalSpendings}{" "}
        </span>
      </h1>

      <div style={{ maxWidth: "420px", margin: "10px auto 0px auto" }}>
        <div className="header-income-wrapper spending-details">
          <p>Income</p>
          <p>+ ${totalIncome}</p>
        </div>

        <div className="header-expenses-wrapper spending-details">
          <p>Expenses</p>
          <p>- ${totalSpendings}</p>
        </div>
      </div>
    </header>
  );
};

export default Title;
