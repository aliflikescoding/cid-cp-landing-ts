import React from "react";

interface TimeCardPorops {
  time: string;
  location: string;
}

const TimeCard: React.FC<TimeCardPorops> = ({ time, location }) => {
  return (
    <div className="text-background bg-primary px-3 py-4 drop-shadow-xl rounded-2xl">
      <h1 className="text-xl font-semibold mb-3 opacity-90 flex items-end gap-1">
        <span className="text-5xl opacity-100">{time}</span>{" "}
        <span>minutes</span>
      </h1>
      <h1 className="text-xl font-semibold opacity-90">
        from <span className="capitalize">{location}</span>
      </h1>
    </div>
  );
};

export default TimeCard;
