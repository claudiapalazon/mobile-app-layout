import { FC, useState } from "react";

export const WeeklyView: FC = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const toggleDay = (index: number) => {
    setSelectedDays((prev) =>
      prev.includes(index)
        ? prev.filter((day) => day !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="weekly-view px-4">
      <h3 className="title-20 mb-3">Día(s) de la semana</h3>
      <div className="weekly-view-container">
        {weekDays.map((day, index) => (
          <button
            onClick={() => toggleDay(index)}
            key={day}
            className={`weekly-view-day body-medium-18 ${
              selectedDays.includes(index) ? "active" : ""
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};
