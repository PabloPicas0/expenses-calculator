import { useState } from "react";

import { yearsProps } from "./Popover";
import Arrow from "./Arrow";

type PopoverHistoryProps = {
  yearKey: string;
  years: yearsProps;
};

const PopoverHistory = (props: PopoverHistoryProps) => {
  const { yearKey, years } = props;

  const [IsChildrenVisible, setIsChildrenVisible] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsChildrenVisible((prev) => !prev)}
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
        {years[yearKey].map((month) => {
          return (
            <div
              key={month.charCodeAt(0) * Math.random()}
              style={{ backgroundColor: "black", padding: "0 0 0 15px" }}>
              {month}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopoverHistory;
