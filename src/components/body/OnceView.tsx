import { FC, useEffect, useState } from "react";
import { SliderMonth } from "./SliderMonth";
import { getMonthName } from "../../utils/formatters/date";

export const OnceView: FC = () => {
  const [currentMonth, setCurrentMonth] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    setCurrentMonth(getMonthName(today));
  }, []);

  return (
    <>
      <div className="onceView-header mb-3 d-flex justify-content-between align-items-center px-4">
        <h3 className="title-20 mb-0">{currentMonth}</h3>
        <button className="onceView-header-button d-flex align-items-center justify-content-center body-medium-12">
          Mostrar mes
        </button>
      </div>
      <SliderMonth
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
    </>
  );
};
