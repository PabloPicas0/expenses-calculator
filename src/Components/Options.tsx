const Options = () => {
  return (
    <form className="options">
      <select id="money">
        <option value="income">➕</option>
        <option value="expense">➖</option>
      </select>

      <input type="text" placeholder="description" />
      <input type="number" placeholder="ammount" />

      <button>add</button>
      <button>save</button>
    </form>
  );
};

export default Options;
