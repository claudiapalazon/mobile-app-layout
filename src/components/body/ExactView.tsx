import { FC, useEffect, useState } from "react";
import Picker from "react-mobile-picker";

export const ExactView: FC = () => {
  const [pickerValue, setPickerValue] = useState({
    hours: 12,
    minutes: 30,
  });

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const selections = {
    hours: hours,
    minutes: minutes,
  };

  const handlePickerChange = (value: any, key: string) => {
    setPickerValue(value);
  };

  useEffect(() => {
    const pickerElement = document.querySelector(".react-mobile-picker");
    if (pickerElement) {
      const lastDiv = pickerElement.lastChild as HTMLElement;
      if (lastDiv) {
        lastDiv.innerHTML = "";
        lastDiv.classList.add("background-selected-row");
      }
    }
  }, [pickerValue]);

  return (
    <div className="mt-3">
      <Picker
        className="react-mobile-picker"
        height={120}
        value={pickerValue}
        onChange={handlePickerChange}
        wheelMode="normal"
      >
        <Picker.Column className={"picker-column"} key={"hours"} name={"hours"}>
          {selections.hours.map((option) => (
            <Picker.Item className="picker-item" key={option} value={option}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "selected-row body-medium-18 align-end"
                      : "not-selected-row body-medium-16 align-end"
                  }
                >
                  {option}
                </div>
              )}
            </Picker.Item>
          ))}
        </Picker.Column>
        <div className="d-flex flex-column justify-content-center">
          <div className="separator body-medium-16 not-selected-row">:</div>
          <div className="separator body-medium-18">:</div>
          <div className="separator body-medium-16 not-selected-row">:</div>
        </div>
        <Picker.Column
          className={"picker-column"}
          key={"minutes"}
          name={"minutes"}
        >
          {selections.minutes.map((option) => (
            <Picker.Item className="picker-item" key={option} value={option}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "selected-row body-medium-18 align-start"
                      : "not-selected-row body-medium-16 align-start"
                  }
                >
                  {option}
                </div>
              )}
            </Picker.Item>
          ))}
        </Picker.Column>
      </Picker>
    </div>
  );
};
