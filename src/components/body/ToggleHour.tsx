import { FC } from "react";

export const ToggleHour: FC<{
  selected: string;
  toggle: (value: string) => void;
}> = ({ selected, toggle }) => {
  return (
    <div className="toggle-hour d-flex align-items-center">
      <div
        className={`toggle-hour-button flex-fill h-100 d-flex flex-column align-items-center justify-content-center ${
          selected === "flexible" ? "active" : ""
        }`}
        onClick={() => toggle("flexible")}
      >
        <div className="body-semibold-14 text-center">Inicio flexible</div>
      </div>
      <div
        className={`toggle-hour-button flex-fill h-100 d-flex flex-column align-items-center justify-content-center ${
          selected === "exact" ? "active" : ""
        }`}
        onClick={() => toggle("exact")}
      >
        <div className="body-semibold-14 text-center">Inicio exacto</div>
      </div>
    </div>
  );
};
