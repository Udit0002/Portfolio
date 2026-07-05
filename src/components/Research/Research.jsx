import React from "react";
import { researchPapers } from "../../constants";
import { FiExternalLink } from "react-icons/fi";

const Research = () => {
  return (
    <section
      id="research"
      className="w-full py-24 relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          RESEARCH
        </h2>

        <div className="w-28 h-1 bg-purple-500 mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-base md:text-lg text-center max-w-2xl leading-8">
          A showcase of my published research work, academic contributions,
          and explorations in artificial intelligence, computer vision,
          and deep learning.
        </p>
      </div>

      {/* Research Cards */}
      <div className="max-w-5xl mx-auto px-6">
        {researchPapers.map((paper) => (
          <div
            key={paper.id}
            className="group bg-[#081229]/90 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 md:p-10 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:-translate-y-2 transition-all duration-500"
          >
            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  {paper.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm md:text-base">
                  {paper.publisher} • {paper.date}
                </p>

                <p className="text-purple-300 text-sm mt-1">
                  {paper.conference}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {paper.type}
                </p>
              </div>

              <span className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 text-sm font-medium whitespace-nowrap">
                {paper.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-8 text-base mb-8">
              {paper.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">
              {paper.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-purple-600/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white transition-all duration-300"
            >
              View on IEEE
              <FiExternalLink />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;