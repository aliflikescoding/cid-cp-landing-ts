import React from "react";
import Image from "next/image";

interface IconCardProp {
  title: string;
  paragraph: string;
  iconLink: string;
}

const IconCard: React.FC<IconCardProp> = ({ title, paragraph, iconLink }) => {
  return (
    <div className="bg-background text-text flex flex-col items-start p-4 rounded-2xl">
      <div className="bg-primary p-3 rounded-2xl">
        <Image
          src={`${iconLink}`}
          alt="Icon Image"
          height={0}
          width={0}
          sizes="100vw"
          className="h-9 w-auto"
        />
      </div>
      <h1 className="text-xl font-semibold mt-6 mb-4">{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default IconCard;
