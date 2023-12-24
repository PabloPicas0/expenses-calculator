import { useEffect, useRef, useState } from "react";
import PopoverHistory from "./PopoverHistory";
import { expensesType } from "../App";
import Arrow from "./Arrow";

type PopoverProps = {
  data: expensesType;
};

const Popover = (props: PopoverProps) => {
  const { data } = props;

  const [isParentVisible, setIsParentVisible] = useState(false);

  const poperRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const yearsKeys = Object.keys(data);

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
          return <PopoverHistory key={yearKey} yearKey={yearKey} data={data} />;
        })}
      </div>
    </>
  );
};

export default Popover;
