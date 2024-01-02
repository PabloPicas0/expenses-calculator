import { useRef, useState } from "react";
import PopoverHistory from "./PopoverHistory";
import { expensesType } from "../../App";
import Arrow from "../../assets/Arrow";

type PopoverProps = {
  data: expensesType;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
};

const Popover = (props: PopoverProps) => {
  const { data, setYear, setMonth } = props;

  const [isParentVisible, setIsParentVisible] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const yearsKeys = Object.keys(data);

  const handlePostion = () => {
    if (!buttonRef.current || !contentRef.current) return;

    const boundingClientRect = buttonRef.current.getBoundingClientRect();

    const { bottom, left, width } = boundingClientRect;

    contentRef.current.style.top = `${bottom + 5}px`;
    contentRef.current.style.left = `${left}px`;
    contentRef.current.style.width = `${width}px`;
  };

  return (
    <>
      <button
        onClick={() => {
          handlePostion();
          setIsParentVisible((prev) => !prev);
        }}
        type="button"
        className="history-btn"
        ref={buttonRef}
        style={{ zIndex: isParentVisible ? 1337 : "initial" }}>
        History
        <Arrow />
      </button>

      <div
        ref={contentRef}
        style={{
          position: "fixed",
          display: isParentVisible ? "block" : "none",
          maxHeight: "312px",
          borderRadius: "5px",
          overflowY: "auto",
          scrollbarGutter: "stable",
          zIndex: isParentVisible ? 1337 : "initial",
        }}>
        {yearsKeys.map((yearKey) => {
          return (
            <PopoverHistory
              key={yearKey}
              yearKey={yearKey}
              data={data}
              setYear={setYear}
              setMonth={setMonth}
            />
          );
        })}
      </div>

      {isParentVisible ? (
        <div
          onClick={() => setIsParentVisible(false)}
          style={{ position: "fixed", inset: 0, zIndex: 100 }}></div>
      ) : null}
    </>
  );
};

export default Popover;
