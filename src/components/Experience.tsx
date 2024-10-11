import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "Agua Wireless System",
    period: "May 2024 - June 2024",
    description:
      "Lead the frontend development team in creating cutting-edge web applications using React and Three.js.",
  },
  {
    title: "Software Developer Intern",
    company: "Kelp",
    period: "Oct 2023 - Feb 2024",
    description:
      "Lead the frontend development team in creating cutting-edge web applications using React and Three.js.",
  },
  {
    title: "Frontend Developer Intern",
    company: "DFIIE",
    period: "May 2023 - Aug 2023",
    description:
      "Developed and maintained full-stack applications using the MERN stack, improving overall performance by 40%.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Suvidha Foundation",
    period: "Dec 2022 - Jan 2023",
    description:
      "Assisted in the development of responsive websites and implemented UI/UX designs using HTML, CSS, and JavaScript.",
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
    <section id="experience" className="py-20 bg-gray-900">
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
              className="timeline-item"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-primary">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
