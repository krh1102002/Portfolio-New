import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import tiffinwala from "../assets/tiffinwala Mock web.png";
import Threedportfolio from "../assets/portfolio Mock.png";
import portfolio from "../assets/old portfolio Mock web.png";
import airbnb from "../assets/airbnb Mock.png";
import dfiie from "../assets/dfiie Mock.png";
import cryptic from "../assets/cryptic.png";

const projects = [
  {
    title: "TiffinWala",
    description: [
      "Engineered a digital solution for the tiffin service sector, enabling provider scalability and customer interaction.",
      "Deployed advanced web tools, a seamless user interface, and a feedback mechanism to boost efficiency and engagement.",
    ],
    image: tiffinwala,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://github.com/krh1102002/TiffinManagmentSystem",
  },
  {
    title: "3D Portfolio",
    description: [
      "Developed an interactive 3D portfolio utilizing Three.js and React Three Fiber, demonstrating advanced web development skills.",
      "Implemented responsive design principles to ensure optimal user experience across devices and screen sizes.",
    ],
    image: Threedportfolio,
    technologies: ["React", "Three.js", "React Three Fiber", "Tailwind CSS"],
    github: "https://github.com/krh1102002/Portfolio-New",
    live: "https://kunalhulkeportfolio.vercel.app/",
  },
  {
    title: "Incubation Center Website",
    description: [
      "A comprehensive platform designed to support startups by providing resources, mentorship, and networking opportunities.",
      "Features an interactive event management system that allows users to easily register for workshops, seminars, and networking events while promoting community engagement.",
    ],
    image: dfiie,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/krh1102002/DBATU-Forum-Innovation",
    live: "https://dbatuiiec.com/",
  },
  {
    title: "Cryptic Conundrum",
    description: [
      "Engineered an innovative online puzzle game merging language mastery with logical puzzles, crafting an engaging and intellectually stimulating user experience.",
      "Developed a scalable, secure web application with an adaptive interface, promoting continuous skill development and user retention.",
    ],
    image: cryptic,
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/krh1102002/WordGuessingGame",
    live: "https://word-guessing-game-iota.vercel.app/auth",
  },
  {
    title: "Airbnb",
    description: [
      "Created a sophisticated booking system featuring flexible pricing and simplified cancellation options, enhancing user satisfaction and trust.",
      "Implemented advanced search functionalities, favorites, and shareable URLs to improve property discovery, utilizing MongoDB for scalable data management.",
    ],
    image: airbnb,
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/krh1102002/Airbnb-app",
    live: "https://airbnb-rent-app.vercel.app/",
  },
  {
    title: "Portfolio",
    description: [
      "Designed a professional portfolio to effectively showcase my projects and skills, reflecting modern web design principles.",
      "Utilized responsive design strategies to ensure an engaging user experience across all devices, incorporating smooth animations and transitions.",
    ],
    image: portfolio,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/krh1102002/Portfolio",
    live: "https://kunal-hulke-portfolio.vercel.app/",
  },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Projects</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="project-card bg-gray-700 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <ul
                  className="text-gray-300 text-sm mb-3 h-20 overflow-y-auto scrollbar-hide"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-white">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-3 flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="skill-tag bg-gray-600 text-gray-200 text-xs px-2 py-1 rounded whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
