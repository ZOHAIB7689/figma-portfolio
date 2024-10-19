import React from 'react';
import SkillCard from './SkillCard';

const skillsData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cf4ac708a61024cf48412b7f2e9f28cf2d4bf448ee91f154e65b7dee4e2609e?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "HTML",
    description: "Structures the content of web pages using elements like text, links, and media.",
    percentage: 88,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1501fd0ccb4365d4be1e2a192c227681d8369e71d634f2b8ada6a9caa7263ffb?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/145ad3bbf9a7df472c646d93b55c46b361b458c0b551a52112625407474e91f7?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "CSS",
    description: "Styles web pages by controlling layout, colors, and fonts.",
    percentage: 92,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a3c5f93a3efc22346208f0fb9a7113b92676d7b553ab6d5da52f9d88f17124c?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/28eb15dd6ad10c9370683fdb8e9b80d57067db20396063ecaa9427bc344d13ff?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "JavaScript",
    description: "Adds interactivity and dynamic behavior to web pages.",
    percentage: 94,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/896dd4ccefec2a62fda578097f3eda749474767d040ff4d44377c657d197eec6?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/82f7e8102a53d8b75bf7de416f2fea6e7f5e40da4fd70c8793e5bf7aab9e7355?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "Tailwind CSS",
    description: "A utility-first framework for fast styling with pre-built classes.",
    percentage: 97,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/41401225205c46f3656ad18a67997e1e288c3ca274ce6557659f399459218ff5?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/80c664abc69ba97322e052a42cd034f5f6a628345a127e7c14e1a4b4452d7293?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "TypeScript",
    description: "A typed superset of JavaScript.",
    percentage: 88,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1501fd0ccb4365d4be1e2a192c227681d8369e71d634f2b8ada6a9caa7263ffb?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/482ef7d0d3417a95abaa4e04113134decc658f8a69d1172bae0fd184f1450653?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "Git/GitHub",
    description: "A version control system used for tracking changes in computer files.",
    percentage: 92,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a3c5f93a3efc22346208f0fb9a7113b92676d7b553ab6d5da52f9d88f17124c?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a440ce5245339a067c618241a498c4eb96a56d46faaca7e8c2c9ba6b64e6f019?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "React",
    description: "A JavaScript-based UI development library.",
    percentage: 83,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/651f263ad90f8d871b3b1cfd8143debcc1215a660ac3547cf9792b39c39bba2c?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4f0c85ca711590244a46394ca505cd6e5109238279da32ceb15e4f1e23354d3?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "Next.js",
    description: "A React framework for building full-stack web applications.",
    percentage: 85,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/50954cc5023c3be2e8c5776d2f54a5f15d56395c297cf393c4949dd8440151ed?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0dba533e6e415a8bbb39c8bcff0d6399fd94c073816836339a8359fb97a1235?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070",
    title: "Vercel",
    description: "Vercel is a cloud platform for frontend developers to deploy applications.",
    percentage: 97,
    progressImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/105d3be6fd3c7916d77d83193eae559661c47b2710dab15d61c8d345fc932c43?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section className="mt-32 w-full max-w-[1190px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap">
        {skillsData.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <SkillCard {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;