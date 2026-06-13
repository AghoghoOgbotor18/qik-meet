import React from "react";
import { motion } from "framer-motion";
import passOne from "../assets/pass1.webp"
import passTwo from "../assets/pass2.webp"

const testimonials = [
  {
    text: "QikMeet made our virtual family reunions so easy! No downloads, no stress — just click and connect instantly.",
    name: "Michael Kim",
    role: "Software Engineer",
    image: passOne,
  },
  {
    text: "I use QikMeet for my remote design team. The clarity and simplicity are top-notch — everyone joins smoothly.",
    name: "Melissa Reynolds",
    role: "UX Designer",
    image:  passTwo,
  },
  {
    text: "QikMeet transformed how we hold quick check-ins at work. No sign-up, just one room link — absolutely love it!",
    name: "Sarah Morgan",
    role: "Content Strategist",
    image: passOne
  },
  {
    text: "Our church uses QikMeet for virtual meetings. The audio and video quality is amazing even with low data.",
    name: "David Ojo",
    role: "Community Leader",
    image: passTwo,
  },
  {
    text: "Quick, light, and reliable — QikMeet saves me from the usual tech setup stress. I love how simple it is!",
    name: "Amara Eze",
    role: "Project Manager",
    image: passOne,
  },
];

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-screen m-0 pt-[10rem] py-16 bg-gray-50 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <p className="text-lg font-medium text-gray-600">Thousands of users love QikMeet</p>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Real stories from happy users
        </h2>
      </motion.div>

      {/* Animated Sliding Row */}
      <div className="relative w-[80%] mx-auto overflow-hidden">
        <div className="absolute inset-16">
          <div className="w-full linearColor p-60 h-full mx-auto rotate-180 opacity-30 rounded-3xl blur-lg filter"></div>
        </div>
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-100%"], // keep sliding as before
          }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[320px] bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              <div className="flex items-center text-[#FDB241] mb-2">
                {/* stars svg */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-base italic mb-4">“{t.text}”</p>

              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
