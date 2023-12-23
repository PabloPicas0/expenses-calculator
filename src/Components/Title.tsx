const Title = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  return (
    <header className="header">
      <h1>
        Budget available in {currentDate}
        <br />+ $1000
      </h1>

      <div style={{ maxWidth: "420px", margin: "10px auto 0px auto" }}>
        <div className="header-income-wrapper spending-details">
          <p>Income</p>
          <p>+ $1000</p>
        </div>

        <div className="header-expenses-wrapper spending-details">
          <p>Expenses</p>
          <p>- $1000</p>
        </div>
      </div>
    </header>
  );
};

export default Title;
