import { useState } from "react";

import Popover from "./Popover";
import { expensesType } from "../App";

type OptionProps = {
  month: string;
  year: string;
  data: expensesType;
  setData: React.Dispatch<React.SetStateAction<expensesType>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
};

const Options = (props: OptionProps) => {
  const { year, month, setData, data, setYear, setMonth } = props;

  const [isIncome, setIsIncome] = useState(true);
  const [description, setDescription] = useState("");
  const [ammount, setAmmount] = useState("");

  const [currentMonth, currentYear] = new Date()
    .toLocaleDateString("en-GB", { month: "short", year: "numeric" })
    .split(" ");

  const isDisabled = description === "" || ammount === "" || year !== currentYear || month !== currentMonth;

  const handleUpdate = () => {
    setData((prevData) => {
      const currentExpenses = prevData[currentYear];
      const newData: expensesType = {
        ...prevData,
        [currentYear]: JSON.parse(JSON.stringify(currentExpenses)),
      };

      const currentMonthIndex = newData[currentYear].findIndex((e) => e.month === currentMonth);

      if (isIncome) {
        newData[currentYear][currentMonthIndex].income.push({
          descritpiton: description,
          income: Number(ammount),
        });
      } else {
        newData[currentYear][currentMonthIndex].spendings.push({
          descritpiton: description,
          income: Number(ammount),
        });
      }

      localStorage.setItem("expensesData", JSON.stringify(newData));

      return newData;
    });

    setDescription("");
    setAmmount("");
  };

  return (
    <form className="options">
      <Popover data={data} setYear={setYear} setMonth={setMonth} />

      <select id="money" onChange={(e) => setIsIncome(e.target.value === "income" ? true : false)}>
        <option value="income">➕</option>
        <option value="expense">➖</option>
      </select>

      <input
        type="text"
        placeholder="Description"
        className="input-base"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ammount"
        min={0}
        className="input-base"
        value={ammount}
        onChange={(e) => setAmmount(e.target.value)}
      />

      <button
        type="button"
        className="icon-button"
        aria-label="submit"
        onClick={handleUpdate}
        disabled={isDisabled}>
        <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M12 11V17M9 14H15"
              stroke={isDisabled ? "#808080" : "#008000"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>{" "}
          </g>
        </svg>
      </button>
    </form>
  );
};

export default Options;
