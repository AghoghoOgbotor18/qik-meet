import React from "react";
import AboutImage from "../assets/family.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="container mx-auto pt-30 py-10 px-4">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-black text-center text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About QikMeet
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8">
        {/* Image */}
        <motion.div
          className="md:basis-[80%]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={AboutImage} alt="about" />
        </motion.div>

        {/* Text + Button */}
        <motion.div
          className="container mx-auto w-[95%] flex flex-col justify-center items-center md:items-start gap-3 text-center md:text-start"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>
            <span className="font-bold text-gray-900">QikMeet</span> is a simple
            and reliable platform designed to help you connect instantly with
            your friends, family, and teammates anytime, anywhere. We believe
            that communication should be fast, easy, and accessible to everyone,
            without the stress of sign-ups or complicated setups.
          </p>
          <p className="text-gray-900 leading-relaxed">
            Whether it's a family gathering, a study group, or a quick team
            meeting, QikMeet makes it effortless to create and join rooms in
            seconds.
          </p>
          <p>
            <span className="font-bold text-lg">QikMeet</span> — One Click, and
            You're Connected.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
