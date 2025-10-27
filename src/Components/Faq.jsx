import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is QikMeet?",
    answer:
      "QikMeet is a simple and fast video meeting platform that lets you connect instantly with friends, family, or colleagues — no downloads or sign-ups required.",
  },
  {
    question: "Do I need to create an account to start a meeting?",
    answer:
      "No, you don't! Just enter a room ID or create one instantly, and you're good to go. Anyone with your meeting link can join.",
  },
  {
    question: "Is QikMeet free to use?",
    answer:
      "Yes! QikMeet is completely free to use. We plan to add premium features soon, but core meetings will always be free.",
  },
  {
    question: "Is my video call secure?",
    answer:
      "Yes. All meetings are end-to-end encrypted, and your data is never stored or shared with third parties.",
  },
  {
    question: "Can I use QikMeet on mobile devices?",
    answer:
      "Absolutely! QikMeet works perfectly on desktops, tablets, and mobile devices. Just open it in your browser — no app needed.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="container mx-auto pt-[10rem] py-30 px-4 md:px-12">
      {/* Header with fade-in */}
      <motion.div
        className="flex flex-col justify-center items-center gap-3 text-center pb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">
          You Have Questions, We Have Answers!
        </h2>
        <p>Have a question in mind? Check out the most common ones below</p>
      </motion.div>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <button
              className="flex justify-between cursor-pointer items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-lg text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="text-pink-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>

            {openIndex === index && (
              <motion.p
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 text-gray-600 leading-relaxed overflow-hidden"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}

        <p className="text-center pt-2 text-sm">
          Still have questions on your mind?{" "}
          <span className="text-blue-700 cursor-pointer">
            <a href="#">Reach out to us</a>
          </span>{" "}
          for personalized assistance.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
