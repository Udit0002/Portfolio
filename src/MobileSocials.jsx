// src/components/MobileSocials.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiFileText } from "react-icons/fi";

const MobileSocials = () => (
  <div className="fixed bottom-6 right-6 z-50 lg:hidden bg-[#050414] bg-opacity-70 backdrop-blur-md p-3 rounded-full flex gap-3 shadow-lg">
    <a href="https://github.com/udit0002" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-white hover:text-[#8245ec] text-xl" />
    </a>
    <a href="https://www.linkedin.com/in/udit0002/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-white hover:text-[#8245ec] text-xl" />
    </a>
    <a href="https://leetcode.com/chaudharyudit30" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-white text-xl hover:text-[#8245ec] transition-colors duration-300" />
          </a>
  </div>
);

export default MobileSocials;
