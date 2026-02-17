import { FC } from "react";
import { useToggleSelection } from "../../hooks/useToggleSelection";
import { ToggleHour } from "./ToggleHour";
import { FlexibleView } from "./FlexibleView";
import { ExactView } from "./ExactView";

export const Hour: FC = () => {
  const { selected, toggle } = useToggleSelection<"flexible" | "exact">(
    "flexible"
  );

  return (
    <div className="pt-4 hour-container">
      <h3 className="title-20 mb-3">Hora de inicio</h3>
      <ToggleHour selected={selected} toggle={toggle} />
      {selected === "flexible" ? <FlexibleView /> : <ExactView />}
    </div>
  );
};
