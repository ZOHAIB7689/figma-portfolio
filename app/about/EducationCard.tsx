import React from "react";

interface EducationCardProps {
  title: string;
  content: string;
  bgColor: string;
  borderColor: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ title, content, bgColor, borderColor }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className={`flex flex-col grow px-4 pb-4 w-full rounded-lg border-2 border-solid ${bgColor} bg-opacity-30 ${borderColor} border-opacity-70 max-md:mt-4`}>
        <h3 className="z-10 self-center mt-4 text-4xl text-red-400">{title}</h3>
        <div className="px-6 pt-4 pb-14 text-lg leading-6 text-black rounded bg-opacity-50 max-md:px-5">
          {content}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;