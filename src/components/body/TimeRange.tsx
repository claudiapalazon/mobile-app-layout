import { FC, useEffect, useRef } from "react";

const TimeRange: FC<{ time: number; setTime: (value: number) => void }> = ({
  time,
  setTime,
}) => {
  const rangeRef = useRef<HTMLInputElement>(null);
  const updateBackground = (value: number) => {
    const percentage = ((value - 30) / (300 - 30)) * 100;
    if (rangeRef.current) {
      rangeRef.current.style.background = `linear-gradient(to right, #00bfb5 ${percentage}%, #dddddd ${percentage}%)`;
    }
  };

  useEffect(() => {
    updateBackground(time);
  }, [time]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setTime(value);
    updateBackground(value);
  };

  return (
    <input
      ref={rangeRef}
      type="range"
      min={30}
      max={300}
      step={30}
      value={time}
      onChange={handleChange}
    />
  );
};

export default TimeRange;
