import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const projects = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/173bed4ae30386eab2aea5828365a00ff52a339aad2dce61b23d25dc39e2ff9a?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/88c3310fc7d783b8b395b31190920c235c34f95d739cbdafeebfb2d8f4b7508c?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4a0e718ef832e115ca471b6bc195740aab40d856782d898ac269a323d4804cc?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070" },
  ];

  return (
    <main className="flex flex-col items-start px-20 pb-12 bg-white max-md:px-5 max-md:pt-24">
      <div className="w-full max-w-[1367px] max-md:max-w-full">
        <Header />
        <section className="mt-20 w-full max-w-[1314px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} imageSrc={project.imageSrc} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MyComponent;