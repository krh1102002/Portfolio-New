import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-text py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Kunal Hulke. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/krh1102002"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-hulke/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/kunalhulke01/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#hero"
            className="text-primary hover:text-primary-dark transition duration-300"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
