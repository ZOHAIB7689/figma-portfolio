import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section className="container mx-auto px-4 bg-white py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-500 mb-6">
            About Me
          </h2>
          <p className="text-lg text-zinc-700 mb-8">
            I am a dynamic individual with a strong drive to explore the intersection of technology and creativity. My journey began in a non-technical environment, but I&apos;ve developed a keen interest in leveraging innovative technologies to create impactful solutions. With a focus on continuous learning, I enjoy collaborating with diverse teams to bring fresh ideas to life. Outside of my professional pursuits, I love exploring new cultures, reading about advancements in tech, and finding inspiration in everyday life.
          </p>
          <a
            href="https://linkedin.com"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/143c30966b64b3f2dda946a750e8de2e9bebeb7509db1ef6adae969e001aa8de?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
              alt="LinkedIn"
              width={80}
              height={80}
              className="w-6 h-6 mr-2"
            />
            LinkedIn
          </a>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full" />
            <Image
              src="/bg2.png"
              alt="Profile"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
