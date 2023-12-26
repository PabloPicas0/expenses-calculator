import { useState } from "react";

import Arrow from "./Arrow";
import { expensesType } from "../App";

type PopoverHistoryProps = {
  yearKey: string;
  data: expensesType;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
};

const PopoverHistory = (props: PopoverHistoryProps) => {
  const { yearKey, data, setYear, setMonth } = props;

  const [IsChildrenVisible, setIsChildrenVisible] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setIsChildrenVisible((prev) => !prev);
          setYear(yearKey);
        }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          padding: "0 0 0 10px",
          width: "100%",
          borderRadius: 0,
        }}>
        <span style={{ pointerEvents: "none" }}>{yearKey}</span>
        <Arrow />
      </button>

      <div style={{ display: IsChildrenVisible ? "block" : "none" }}>
        {data[yearKey].map((e) => {
          return (
            <div
              onClick={() => setMonth(e.month)}
              key={e.month.charCodeAt(0) * Math.random()}
              style={{ backgroundColor: "black", padding: "0 0 0 15px" }}>
              {e.month}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopoverHistory;
