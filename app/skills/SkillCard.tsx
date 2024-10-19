import React from 'react';

interface SkillCardProps {
  imageSrc: string;
  title: string;
  description: string;
  percentage: number;
  progressImageSrc: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  imageSrc,
  title,
  description,
  percentage,
  progressImageSrc,
}) => {
  return (
    <div className="flex flex-col w-full p-4 rounded-lg border border-solid border-violet-950 h-full">
      <div className="flex items-center mb-4">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} icon`}
          className="object-contain w-16 h-16 mr-4"
        />
        <div>
          <h3 className="text-2xl font-bold text-black">{title}</h3>
          <p className="text-sm text-green-950">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <img
          loading="lazy"
          src={progressImageSrc}
          alt={`${title} progress bar`}
          className="object-contain w-3/4"
        />
        <span className="text-xl font-bold text-black">{percentage}%</span>
      </div>
    </div>
  );
};

export default SkillCard;