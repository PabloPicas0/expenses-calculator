type PropsTypes = {
  data: number[];
};

type ReduceAccumulatorTypes = {
  income: number[];
  spending: number[];
};

const Spendings = (props: PropsTypes) => {
  const { data } = props;

  const sortedData = data.reduce(
    (acc, e, idx) => {
      idx % 2 === 0 ? acc.income.push(idx) : acc.spending.push(idx);
      return acc;
    },
    {
      income: [],
      spending: [],
    } as ReduceAccumulatorTypes
  );

  return (
    <div className="spendings-wrapper">
      <div id="income">
        <h2 className="center-text border-bottom padding-bottom color-green">Income</h2>
        {sortedData.income.map((e) => {
          return (
            <div key={e * Math.random()} id="earned" className="spending-details border-bottom">
              <p>{Math.random() < 0.5 ? "Payment" : "lottery"}</p>
              <p className="color-green">{e}</p>
            </div>
          );
        })}
      </div>

      <div id="spendings">
        <h2 className="center-text border-bottom padding-bottom color-red">Spendings</h2>
        {sortedData.spending.map((e) => {
          return (
            <div key={e * Math.random()} id="spended" className="spending-details border-bottom">
              <p>{Math.random() < 0.5 ? "Bills" : "Food"}</p>
              <p className="color-red">{e}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spendings;
