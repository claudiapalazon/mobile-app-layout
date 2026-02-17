import { useState } from "react";

type UseToggleSelection<T> = {
  selected: T;
  toggle: (value: T) => void;
};

export const useToggleSelection = <T>(
  initialValue: T
): UseToggleSelection<T> => {
  const [selected, setSelected] = useState<T>(initialValue);

  const toggle = (value: T) => {
    setSelected(value);
  };

  return { selected, toggle };
};
