import { PropsTypes } from "./Spendings";

const Title = (props: PropsTypes) => {
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
        <br />$ {totalIncome - totalSpendings}
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
