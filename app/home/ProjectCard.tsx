import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt="Project preview"
        className="object-contain grow w-full rounded-xl aspect-[1.25] shadow-[10px_12px_30px_rgba(5,5,5,0.1)] max-md:mt-8 max-md:max-w-full"
      />
    </div>
  );
};

export default ProjectCard;
