import React from "react";
import Header from "./Header";
import AboutMe from "./About";
import Education from "./Education";
import EducationCard from "./EducationCard";

const MyComponent: React.FC = () => {
  const educationCards = [
    {
      title: "Background",
      content: "Though I come from a non-tech background, my passion for technology drives me to explore fields like AI, Web3, and Metaverse. I'm committed to leveraging my unique perspective to create meaningful innovations and make an impact in this ever-evolving landscape.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300"
    },
    {
      title: "Education",
      content: "Matriculation: Completed foundational education in village, focusing on problem-solving and analytical skills. Intermediate: New Aligarh College - Specialized in Science, building core academic strengths. Bachelor of Arts (BA): Ongoing - Exploring subjects that foster creativity, communication, and critical thinking.",
      bgColor: "bg-green-100",
      borderColor: "border-green-300"
    },
    {
      title: "Experience",
      content: "Governor's IT Initiative for AI, Web3, and Metaverse (Feb 2024 – Present): Working closely with key stakeholders on innovative tech projects. Exploring new dimensions of artificial intelligence and blockchain technologies. Collaborating in cross-disciplinary teams to shape virtual environments for public-sector applications. Freelance Projects: Designed portfolio websites and web apps using modern frameworks like Next.js and React.",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-300"
    }
  ];

  return (
    <div className="min-h-screen px-20 bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AboutMe />
        <Education>
          {educationCards.map((card, index) => (
            <EducationCard key={index} {...card} />
          ))}
        </Education>
      </main>
    </div>
  );
};

export default MyComponent;