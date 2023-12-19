const Options = () => {
  return (
    <div className="options">
      <select id="money">
        <option value="income">&#43;</option>
        <option value="expense">&#8722;</option>
      </select>

      <input type="text" placeholder="description" />
      <input type="number" placeholder="ammount" />
      
      <button>add</button>
      <button>save</button>
    </div>
  );
};

export default Options;
