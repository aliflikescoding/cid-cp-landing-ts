import React from "react";

interface TotalCardProps {
  title: string;
  total: string;
}

const TotalCard: React.FC<TotalCardProps> = ({ title, total }) => {
  return (
    <div className="border-2 w-full shadow-md px-6 py-3 rounded-2xl">
      <p className="text-xl font-medium capitalize">Total {title}:</p>
      <p className="text-5xl font-bold text-primary mt-2">{total}</p>
    </div>
  );
};

export default TotalCard;
