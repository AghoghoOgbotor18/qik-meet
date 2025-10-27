import React from "react";
import { motion } from "framer-motion";
import firstLogo from "../assets/target.jpg";
import secondLogo from "../assets/walmart.jpg";
import thirdLogo from "../assets/toko.jpg";
import fourthLogo from "../assets/teslaa.jpg";
import fifthLogo from "../assets/subway.jpg";
import sixthLogo from "../assets/grab.jpg";
import seventhLogo from "../assets/garnier.jpg";
import eighthLogo from "../assets/amazon.jpg";
import ninthLogo from "../assets/gopay.jpg";
 
const Brands = () => {

  // motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="works" className="relative py-20 overflow-hidden bg-gray-50 pt-[15rem] sm:py-16 lg:py-20 xl:py-32">
      <motion.div 
        className="px-4 max-w-7xl sm:px-6 lg:px-8 container mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid items-center grid-cols-1 xl:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-8 text-center xl:text-left xl:pr-16 md:max-w-2xl md:mx-auto xl:max-w-none"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Customers and brands we've worked with
            </motion.h2>
            <motion.p
              className="mt-6 text-lg font-normal text-gray-600 font-pj"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              We've helped families, brands and businesses connect with each other with ease.
            </motion.p>
          </motion.div>

          {/* Brand Cards */}
          <motion.div 
            className="relative mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto xl:max-w-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="absolute inset-16">
              <div className="w-full linearColor h-full mx-auto rotate-180 opacity-30 rounded-3xl blur-lg filter"></div>
            </div>
            <div className="relative space-y-5">
              
              {/* Grid rows */}
              {[
                [
                  firstLogo,
                  secondLogo,
                  thirdLogo
                ],
                [
                  fourthLogo,
                  fifthLogo,
                  sixthLogo
                ],
                [
                  seventhLogo,
                  eighthLogo,
                  ninthLogo
                ]
              ].map((row, i) => (
                <motion.div 
                  key={i} 
                  className={`grid grid-cols-1 gap-5 sm:grid-cols-3 ${i === 1 ? "xl:translate-x-6" : i === 2 ? "xl:translate-x-12" : ""}`} 
                  variants={containerVariants}
                >
                  {row.map((src, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full"
                      variants={itemVariants}
                    >
                      <img className="w-auto h-15" src={src} alt="" />
                    </motion.div>
                  ))}
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-transparent via-transparent to-gray-50"></div>
    </section>
  );
};

export default Brands;
