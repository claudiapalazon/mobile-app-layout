import { FC } from "react";
import { ToggleFrequency } from "./ToggleFrequency";
import { useToggleSelection } from "../../hooks/useToggleSelection";
import { OnceView } from "./OnceView";
import { WeeklyView } from "./WeeklyView";

export const Frequency: FC = () => {
  const { selected, toggle } = useToggleSelection<"once" | "weekly">("once");

  return (
    <>
      <div className="px-4">
        <h3 className="title-20 mb-3">Frecuencia</h3>
        <div className="border-bottom pb-4">
          <ToggleFrequency selected={selected} toggle={toggle} />
        </div>
      </div>
      <div className="frequency-container py-4">
        {selected === "once" ? <OnceView /> : <WeeklyView />}
      </div>
    </>
  );
};
