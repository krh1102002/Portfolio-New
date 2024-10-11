import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Me from "../assets/photo.jpg";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={Me}
                alt="Your Name"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                Hello! I'm Kunal Hulke, a passionate Full Stack developer and
                Freelancer with a keen eye for creating beautiful, functional,
                and user-friendly websites. With 1 years of experience in the
                industry, I've had the pleasure of working on a wide range of
                projects, from small business websites to large-scale web
                applications.
              </p>
              <p className="text-lg mb-4">
                My expertise lies in front-end development, where I specialize
                in creating responsive and interactive user interfaces using
                modern technologies like React, Angular, Three.js and Tailwind
                CSS. I'm also well-versed in back-end development and database
                management, allowing me to build full-stack applications.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new design
                trends, contributing to open-source projects, or enjoying a good
                cup of coffee while sketching out new ideas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
