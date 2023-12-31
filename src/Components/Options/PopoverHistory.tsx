import { useState } from "react";

import Arrow from "../../assets/Arrow";
import { expensesType } from "../../App";

type PopoverHistoryProps = {
  yearKey: string;
  data: expensesType;
  isParentVisible: boolean;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
};

const PopoverHistory = (props: PopoverHistoryProps) => {
  const { yearKey, data, isParentVisible, setYear, setMonth } = props;

  const [IsChildrenVisible, setIsChildrenVisible] = useState(false);

  if (!isParentVisible && IsChildrenVisible) {
    setIsChildrenVisible(false);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setIsChildrenVisible((prev) => !prev);
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
        <span>{yearKey}</span>
        <Arrow />
      </button>

      <div style={{ display: IsChildrenVisible ? "block" : "none" }}>
        {data[yearKey].map((e) => {
          return (
            <div
              onClick={() => {
                setYear(yearKey);
                setMonth(e.month);
              }}
              key={e.month.charCodeAt(0) * Math.random()}
              style={{
                backgroundColor: "black",
                padding: "0 0 0 15px",
                cursor: "pointer",
                userSelect: "none",
              }}>
              {e.month}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopoverHistory;
