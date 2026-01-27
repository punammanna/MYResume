import React from "react";
import { Instagram, Linkedin, MessageCircle, Github } from "lucide-react";
import { motion } from "framer-motion";
import PunamImg from "../assets/images/Punam.jpeg";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-card text-white flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-white mb-4 font-semibold">
            DevOps, AWS, Linux & Jenkins
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Punam Manna</span>
          </h1>

          <p className="text-white/80 text-lg mb-8">
            Aspiring DevOps Engineer with hands-on experience in AWS, Linux,
            Jenkins, Docker, and CI/CD pipelines.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="/Punam_Manna_Resume.pdf" // Replace with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-white text-lg
              bg-gradient-to-r from-cyan-400 to-orange-500
              border border-cyan-400
              transition-all duration-300
              hover:scale-110
              hover:shadow-[0_0_25px_rgba(0,255,255,0.9)]"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-bold text-lg
              text-cyan-400 border border-cyan-400 text-center
              transition-all duration-300
              hover:bg-cyan-400 hover:text-black
              hover:scale-110
              hover:shadow-[0_0_25px_rgba(0,255,255,0.9)]"
            >
              View Projects
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 items-center">
            <a
              href="https://www.instagram.com/punammanna" // Your Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur
              transition-all duration-300 cursor-pointer
              hover:scale-125 hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(0,255,255,0.9)]"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/punam-manna-b11a59328/" // Your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur
              transition-all duration-300 cursor-pointer
              hover:scale-125 hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(0,255,255,0.9)]"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://github.com/punammanna" // Your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur
              transition-all duration-300 cursor-pointer
              hover:scale-125 hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(0,255,255,0.9)]"
            >
              <Github size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* GLOW BEHIND IMAGE */}
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="w-96 h-96 rounded-full bg-cyan-400/30 blur-3xl animate-pulseGlow"></div>
          </div>

          {/* FLOATING IMAGE */}
          <div
            className="w-96 h-96 rounded-full p-1 
            bg-gradient-to-r from-cyan-400 to-orange-500 
            shadow-xl relative z-10
            transition-all duration-500
            hover:scale-110 hover:rotate-2
            hover:shadow-[0_0_60px_25px_rgba(0,255,255,0.8)]"
            style={{ animation: "smoothFloat 3s ease-in-out infinite" }}
          >
            <img
              src={PunamImg}
              alt="Punam Manna"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* CHAT BUTTON */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
        className="fixed bottom-8 right-8 w-14 h-14 
        bg-gradient-to-r from-cyan-400 to-orange-500 
        text-white rounded-full flex items-center justify-center shadow-lg
        transition-all duration-300
        hover:scale-125 hover:rotate-12
        hover:shadow-[0_0_25px_rgba(0,255,255,0.9)]"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* FLOATING & GLOW ANIMATIONS */}
      <style>
        {`
          @keyframes smoothFloat {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-18px); }
            100% { transform: translateY(0px); }
          }

          @keyframes pulseGlow {
            0% { transform: scale(0.95); opacity: 0.4; }
            50% { transform: scale(1.05); opacity: 0.6; }
            100% { transform: scale(0.95); opacity: 0.4; }
          }

          .animate-pulseGlow {
            animation: pulseGlow 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
