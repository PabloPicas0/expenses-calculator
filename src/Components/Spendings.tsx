type Props = {
  data: number[];
};

const Spendings = (props: Props) => {
  const { data } = props;

  // This can be simplyfied to one reduce method
  const income = data.filter((e, idx) => idx % 2 === 0);
  const spending = data.filter((e, idx) => idx % 2 !== 0);

  return (
    <div className="spendings-wrapper">
      <div id="income">
        <h2 className="center-text">Income</h2>
        {income.map((e) => {
          return (
            <div key={e * Math.random()} id="earned" className="spending-details">
              <p>{Math.random() < 0.5 ? "Payment" : "lottery"}</p>
              <p>{e}</p>
            </div>
          );
        })}
      </div>

      <div id="spendings">
        <h2 className="center-text">Spendings</h2>
        {spending.map((e) => {
          return (
            <div key={e * Math.random()} id="spended" className="spending-details">
              <p>{Math.random() < 0.5 ? "Bills" : "Food"}</p>
              <p>{e}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spendings;
