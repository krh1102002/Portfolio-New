import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import tiffinwala from "../assets/tiffinWala.png";
import port from "../assets/port.png";
const projects = [
  {
    title: "TiffinWala",
    description:
      "Engineered a digital solution for the tiffin service sector, enabling provider scalability and customer interaction. Deployed advanced web tools, a seamless user interface, and a feedback mechanism to boost efficiency and engagement",
    image: tiffinwala,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://github.com/krh1102002/TiffinManagmentSystem",
  },
  {
    title: "3D Portfolio",
    description:
      "An interactive 3D portfolio built with Three.js and React Three Fiber.",
    image: port,
    technologies: ["React", "Three.js", "React Three Fiber", "Tailwind CSS"],
    github: "https://github.com/yourusername/3d-portfolio",
    live: "https://3d-portfolio-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A productivity app with drag-and-drop functionality and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/task-management-app",
    live: "https://task-management-demo.com",
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
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <ExternalLink size={24} />
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
