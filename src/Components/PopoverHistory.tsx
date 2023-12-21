import { useState } from "react";

const PopoverHistory = (props) => {
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
