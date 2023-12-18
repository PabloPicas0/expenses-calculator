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
      <div id="income">{income}</div>

      <div id="spendings">{spending}</div>
    </div>
  );
};

export default Spendings;
