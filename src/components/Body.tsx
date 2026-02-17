import { FC } from "react";
import { Frequency } from "./body/Frequency";
import { Duration } from "./body/Duration";
import { Hour } from "./body/Hour";

export const Body: FC = () => {
  return (
    <div className="app-body py-4">
      <Frequency />
      <div className="px-4">
        <Duration />
        <Hour />
      </div>
    </div>
  );
};
