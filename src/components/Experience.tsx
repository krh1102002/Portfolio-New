import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "Agua Wireless System",
    period: "May 2024 - June 2024",
    description: [
      "Developed a comprehensive project from scratch, implementing four modules that improved system efficiency by 30%.",
      "Ensured seamless client-side and server-side architecture integration for enhanced performance.",
      "Improved code quality across projects by 25% through dynamic component usage, reducing redundancy.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Kelp",
    period: "Oct 2023 - Feb 2024",
    description: [
      "Refined user experiences in core modules, enhancing intuitive interaction and overall user satisfaction.",
      "Optimized backend operations to improve system stability and efficiency.",
      "Resolved critical bugs, significantly increasing overall system reliability.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "DFIIE",
    period: "May 2023 - Aug 2023",
    description: [
      "Architected DFIIE's website, enhancing the digital platform through design and development leadership.",
      "Innovated a platform spotlighting startups, connecting them with DFIIE’s mission and resources.",
      "Enabled startups to showcase their ventures, driving community engagement and support.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Suvidha Foundation",
    period: "Dec 2022 - Jan 2023",
    description: [
      "Led the design and development team in creating innovative products, showcasing leadership and project execution skills.",
      "Enhanced operational efficiency through effective project and team management.",
      "Contributed to product development from concept to deployment, gaining significant experience in a collaborative environment.",
    ],
  },
];

const Experience: React.FC = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-gray-900 text-text">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Experience</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item mb-6"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-primary">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              <ul className="text-gray-300">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-white">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
