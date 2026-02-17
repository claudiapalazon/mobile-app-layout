import { FC } from "react";

export const ToggleFrequency: FC<{
  selected: string;
  toggle: (value: string) => void;
}> = ({ selected, toggle }) => {
  return (
    <div className="toggle-frequency d-flex align-items-center">
      <div
        className={`toggle-frequency-button flex-fill h-100 d-flex flex-column align-items-center justify-content-center ${
          selected === "once" ? "active" : ""
        }`}
        onClick={() => toggle("once")}
      >
        <div className="body-semibold-16 text-center">Sólo una vez</div>
        <div className="body-regular-14 text-center">Puntual</div>
      </div>
      <div
        className={`toggle-frequency-button flex-fill h-100 d-flex flex-column align-items-center justify-content-center ${
          selected === "weekly" ? "active" : ""
        }`}
        onClick={() => toggle("weekly")}
      >
        <div className="body-semibold-16 text-center">Semanalmente</div>
        <div className="body-regular-14 text-center">Recurrente</div>
      </div>
    </div>
  );
};
