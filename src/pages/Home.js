import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const { isDarkMode } = useTheme();
  return (
    <motion.section
      id="home"
      className={`h-screen flex flex-col justify-center items-center transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex px-10 md:px-32 gap-20 flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 space-y-6">
          <h1
            className={`text-4xl font-extrabold mb-4 ${
              isDarkMode ? "text-gold" : "text-black"
            }`}
          >
            I am{" "}
          <TypeAnimation
          className="text-gold"
            sequence={[
              "Sanju Thomas",
              1000,
              "a Web Developer",
              1000,
              "a Tech Explorer",
              1000,
            ]}
            wrapper="span"
            speed={300}
            cursor={true}
            repeat={Infinity}
          />
           </h1>
          <p className="text-lg leading-relaxed indent-10">
            I'm passionate about building modern, scalable, and user-friendly
            applications. I specialize in frontend technologies like React,
            JavaScript, and Tailwind CSS. I love to experiment with new web
            development tools and stay on top of the latest trends. When I’m not
            coding, you can find me reading tech blogs or improving my skills.
          </p>
          <a
            href="#contact"
            className={`inline-block mt-6 px-6 py-3 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? "bg-gold text-black hover:bg-white hover:text-black"
                : "bg-black text-white hover:bg-gold hover:text-black"
            }`}
          >
            Contact Me
          </a>
        </div>

        <div className="w-full lg:w-2/3 mt-10 lg:mt-0">
          <motion.img
            src="/images/hero.png"
            alt="hero"
            className="w-full h-auto rounded-lg  transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
