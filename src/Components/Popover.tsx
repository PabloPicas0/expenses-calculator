import { useEffect, useRef, useState } from "react";
import PopoverHistory from "./PopoverHistory";

type yearsProps = {
  [key: number | string]: number[];
};

const year = new Date();
const years: yearsProps = {};

for (let i = 1; i < 11; i++) {
  const fullYear = year.getFullYear();
  const months = [];

  for (let j = 0; j < 12; j++) {
    months.push(j);
  }

  years[fullYear] = months;
  year.setFullYear(fullYear + 1);
}

console.log(year, years);

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
    console.log(boundingClientRect);
  }, [poperRef, contentRef]);

  return (
    <>
      <button
        onClick={() => setIsParentVisible((prev) => !prev)}
        type="button"
        className="history-btn"
        ref={poperRef}>
        History
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="history-btn-icon">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#0F0F0F"></path>{" "}
          </g>
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{
          position: "fixed",
          backgroundColor: "black",
          display: isParentVisible ? "block" : "none",
          height: "312px",
          borderRadius: "5px",
          overflowY: "scroll",
        }}>
        {yearsKeys.map((yearKey) => {
          return <PopoverHistory key={yearKey} yearKey={yearKey} years={years} />;
        })}
      </div>
    </>
  );
};

export default Popover;
