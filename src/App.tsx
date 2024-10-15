import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <div className="fixed inset-0 bg-background dark:bg-dark-background flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="min-h-screen bg-background dark:bg-dark-background text-text dark:text-dark-text transition-colors duration-300">
          <CustomCursor />
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
