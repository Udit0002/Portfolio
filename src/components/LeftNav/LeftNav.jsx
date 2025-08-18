import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiFileText } from "react-icons/fi";

const LeftSidebar = () => (
  <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 bg-black text-white flex flex-col items-center py-8 z-40">
    
    {/* Icons centered between top and bottom */}
    <div className="flex flex-col items-center justify-center flex-grow space-y-16">
      <a href="https://github.com/Udit0002" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-xl hover:text-[#8245ec] transition-colors duration-300" />
      </a>
      <a href="https://linkedin.com/in/Udit0002" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl hover:text-[#8245ec] transition-colors duration-300" />
      </a>
      <a href="mailto:chaudharyudit30@gmail.com">
        <FaEnvelope className="text-xl hover:text-[#8245ec] transition-colors duration-300" />
      </a>
      <a href="https://leetcode.com/chaudharyudit30" target="_blank" rel="noopener noreferrer">
        <SiLeetcode className="text-xl hover:text-[#8245ec] transition-colors duration-300" />
      </a>
    </div>

    {/* Resume button pinned at bottom */}
    <a
      href="https://drive.google.com/file/d/17aKdF-oCK0xv0zh1BW3gRanHly_E9nCu/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-cyan-400 hover:bg-cyan-500 transition-all duration-300 transform hover:scale-125 shadow-md"
      style={{
        background: 'linear-gradient(90deg, #8245ec, #a855f7)',
        boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
      }}
      title="Resume"
    >
      <FiFileText className="text-white text-lg" />
    </a>
  </div>
);

export default LeftSidebar;