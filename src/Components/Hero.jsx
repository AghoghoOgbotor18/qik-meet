import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.webp";

const Hero = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      inputRef.current.focus();
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    // Generate unique ID part
    const uniqueId = crypto.randomUUID().substring(2, 8);
    // Combine user input + unique id
    const roomId = `${input}-${uniqueId}`;

    navigate(`/room/${roomId}`);
  };

  return (
    <section
      id="home"
      className="container mx-auto py-30 flex flex-col-reverse md:flex-row justify-center items-center gap-8 p-4 md:gap-16"
    >
      {/* LEFT SIDE - TEXT */}
      <motion.div
        className="flex flex-col gap-5 justify-center md:items-start items-center text-center md:text-start"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Meet with your Team, Family and Friends
        </motion.h2>

        <motion.p
          className="max-w-[95%] md:w-full text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Start a free video call with your friends, family or team members.
          <br />
          No Sign up - No Login required.
        </motion.p>

        <motion.form
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter room name"
            required
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="border py-3 pl-1 border-zinc-400 rounded-md w-[380px] text-zinc-600 outline-[#8b44ff]"
          />
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            onClick={handleSubmit}
            className="btn absolute right-1 top-1"
          >
            Join Room
          </motion.button>
        </motion.form>
        {
          error && <p className="text-red-500 text-sm -mt-5">please input room name</p>
        }
      </motion.div>

      {/* RIGHT SIDE - IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={heroImage}
          alt="family"
          className="md:w-[500px]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
