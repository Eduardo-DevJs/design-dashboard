import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center">
      <h4 className="mt-10 text-xl">Desenvolvido por dudu</h4>
      <div className="flex items-center mt-3 gap-px">
        <a className="cursor-pointer p-2"
          href="https://www.linkedin.com/in/eduardo-oliveira-liria-849467246/"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </a>
        <a className="cursor-pointer p-2" href="https://github.com/Eduardo-DevJs" target="_blank">
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
}
