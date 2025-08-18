import React from "react";
import { experiences } from "../../constants"; // Import your experience data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
  {/* Timeline vertical line */}
  <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0" />

  {experiences.map((experience, index) => (
    <div
      key={experience.id}
      className={`relative flex flex-col sm:flex-row items-start mb-20 ${
        index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
      }`}
    >
      {/* Timeline Circle */}
      <div className="absolute top-0 sm:top-1 left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 z-10">
        <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-[#8245ec] bg-white rounded-full overflow-hidden flex items-center justify-center">
          <img
            src={experience.img}
            alt={experience.company}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Card Content */}
      <div
        className={`mt-16 sm:mt-0 w-full sm:max-w-md p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
          index % 2 === 0 ? "sm:ml-20" : "sm:mr-20"
        } transform transition-transform duration-300 hover:scale-105`}
      >
        {/* Card Top Row */}
        <div className="flex items-center space-x-6 mb-4">
          <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              {experience.role}
            </h3>
            <h4 className="text-sm text-gray-300">{experience.company}</h4>
            <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
          </div>
        </div>

        <p className="text-gray-400">{experience.desc}</p>

        <div className="mt-4">
          <h5 className="font-medium text-white">Skills:</h5>
          <ul className="flex flex-wrap mt-2">
            {experience.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Experience;
