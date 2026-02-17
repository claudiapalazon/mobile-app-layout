import { FC, useEffect, useRef, useState } from "react";
import { getMonthName } from "../../utils/formatters/date";

export const SliderMonth: FC<{
  currentMonth: string;
  setCurrentMonth: (value: string) => void;
}> = ({ currentMonth, setCurrentMonth }) => {
  const [visibleDays, setVisibleDays] = useState<Date[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedDay, setSelectedDay] = useState<Number>();

  useEffect(() => {
    const today = new Date();
    const initialDays = generateDays(today, 60);
    setVisibleDays(initialDays);
  }, []);

  const generateDays = (startDate: Date, count: number): Date[] => {
    const days = [];
    for (let i = 0; i < count; i++) {
      const day = new Date(startDate.getTime());
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const centerPosition = scrollLeft + clientWidth / 2;
      const centerIndex = Math.floor(centerPosition / 56);
      const visibleDay = visibleDays[centerIndex];

      if (visibleDay) {
        const newMonth = getMonthName(visibleDay);
        if (newMonth !== currentMonth) setCurrentMonth(newMonth);
      }
    }
  };

  return (
    <div
      className="month-slider d-flex align-items-center px-4"
      ref={sliderRef}
      onScroll={handleScroll}
    >
      {visibleDays.map((day, index) => (
        <div
          onClick={() => setSelectedDay(index)}
          key={index}
          className={`month-slider-item d-flex flex-column align-items-center justify-content-center ${
            selectedDay === index ? "active" : ""
          }`}
        >
          <p className="mb-0 body-regular-16">
            {day.toLocaleString("default", { weekday: "short" })}
          </p>
          <p className="mb-0 body-medium-18">{day.getDate()}</p>
        </div>
      ))}
    </div>
  );
};
