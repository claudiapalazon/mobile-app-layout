import { FC, useState } from "react";
import TimeRange from "./TimeRange";
import { formatTime } from "../../utils/formatters/time";

export const Duration: FC = () => {
  const [time, setTime] = useState<number>(150);
  return (
    <div className="py-4 duration-container">
      <div className="mb-3 d-flex align-items-center">
        <h3 className="title-20 mb-0">Duración</h3>
        <h2 className="title-20 mb-0 duration-container-hour">
          {formatTime(time)}
        </h2>
      </div>
      <TimeRange time={time} setTime={setTime} />
    </div>
  );
};
