import { useEffect, useRef, useState } from "react";
import PopoverHistory from "./PopoverHistory";
import Arrow from "./Arrow";

export type yearsProps = {
  [key: number | string]: string[];
};

const year = new Date();
const years: yearsProps = {};

for (let i = 1; i < 11; i++) {
  const fullYear = year.getFullYear();
  const months = [];

  for (let j = 0; j < 12; j++) {
    year.setMonth(j);
    const month = year.toLocaleDateString("en-US", { month: "short" });
    months.push(month);
  }

  years[fullYear] = months;
  year.setFullYear(fullYear + 1);
}

const Popover = () => {
  const [isParentVisible, setIsParentVisible] = useState(false);

  const poperRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const yearsKeys = Object.keys(years);

  useEffect(() => {
    if (!poperRef.current || !contentRef.current) return;

    const boundingClientRect = poperRef.current.getBoundingClientRect();

    const { bottom, left, width } = boundingClientRect;

    contentRef.current.style.top = `${bottom + 5}px`;
    contentRef.current.style.left = `${left}px`;
    contentRef.current.style.width = `${width}px`;
  }, [poperRef, contentRef]);

  return (
    <>
      <button
        onClick={() => setIsParentVisible((prev) => !prev)}
        type="button"
        className="history-btn"
        ref={poperRef}>
        History
        <Arrow />
      </button>

      <div
        ref={contentRef}
        style={{
          position: "fixed",
          display: isParentVisible ? "block" : "none",
          height: "312px",
          borderRadius: "5px",
          overflowY: "auto",
          scrollbarGutter: "stable",
        }}>
        {yearsKeys.map((yearKey) => {
          return <PopoverHistory key={yearKey} yearKey={yearKey} years={years} />;
        })}
      </div>
    </>
  );
};

export default Popover;
