import { FC, useState } from "react";

export const FlexibleView: FC = () => {
  const daySlots = [
    {
      title: "Mañana",
      slots: [
        { title: "6-9", icon: "sunrise" },
        { title: "9-12", icon: "sun" },
        { title: "12-15", icon: "sun" },
      ],
    },
    {
      title: "Tarde",
      slots: [
        { title: "15-18", icon: "sun" },
        { title: "18-21", icon: "sunset" },
        { title: "21-00", icon: "moon" },
      ],
    },
  ];

  const [activeSlots, setActiveSlots] = useState<string[]>([]);

  const toggleSlot = (slotTitle: string) => {
    setActiveSlots((prev) =>
      prev.includes(slotTitle)
        ? prev.filter((title) => title !== slotTitle)
        : [...prev, slotTitle]
    );
  };

  return (
    <div className="flexible-view">
      {daySlots.map((daySlot, index) => (
        <div key={index} className="flexible-view-day mt-4">
          <p className="body-regular-14 flexible-view-day mb-3">
            {daySlot.title}
          </p>
          <div className="flexible-view-slots d-flex align-items-center">
            {daySlot.slots.map((slot, index) => (
              <div
                key={index}
                className={`flexible-view-slot d-flex flex-column align-items-center justify-content-center ${
                  activeSlots.includes(slot.title) ? "active" : ""
                }`}
                onClick={() => toggleSlot(slot.title)}
              >
                <div className="flexible-view-slot-icon">
                  <img src={`icons/${slot.icon}.svg`} alt={slot.title} />
                </div>
                <div className="flexible-view-slot-title body-medium-16 mt-1">
                  {slot.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
