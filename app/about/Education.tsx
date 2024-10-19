import React from "react";

interface EducationProps {
  children: React.ReactNode;
}

const Education: React.FC<EducationProps> = ({ children }) => {
  return (
    <section className="w-full max-w-[1172px] max-md:max-w-full">
      <h2 className="text-center mt-6 text-4xl text-red-400">Education</h2>
      <div className="flex gap-5 max-md:flex-col">
        {children}
      </div>
    </section>
  );
};

export default Education;