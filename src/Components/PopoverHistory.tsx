import { useState } from "react";

import { yearsProps } from "./Popover";

type PopoverHistoryProps = {
  yearKey: string;
  years: yearsProps;
};

const PopoverHistory = (props: PopoverHistoryProps) => {
  const { yearKey, years } = props;

  const [IsChildrenVisible, setIsChildrenVisible] = useState(false);

  return (
    <div key={yearKey}>
      <p onClick={() => setIsChildrenVisible((prev) => !prev)}>{yearKey}</p>
      <div style={{ display: IsChildrenVisible ? "block" : "none" }}>
        {years[yearKey].map((month) => {
          return <div key={(month + 1) * Math.random()}>{month} </div>;
        })}
      </div>
    </div>
  );
};

export default PopoverHistory;
