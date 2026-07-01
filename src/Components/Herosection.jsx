import React from "react";
import { Instagram, Linkedin, MessageCircle, Github } from "lucide-react";
import { motion } from "framer-motion";
import PunamImg from "../assets/images/Punam.jpeg";

export default function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
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
              DevOps Engineer with hands-on experience in Docker, Jenkins,
              Kubernetes, Argo CD, and AWS. Skilled in building CI/CD pipelines
              and integrating DevSecOps tools such as SonarQube, OWASP
              Dependency-Check, and Trivy for code quality and security.
              Experienced with AWS services including EC2, Lambda, RDS, and IAM,
              along with monitoring using Grafana. Passionate about automation,
              cloud-native technologies, and delivering secure, scalable
              applications.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/resume.pdf"
                download="Punam_Resume.pdf"
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
                href="https://www.instagram.com/punammanna"
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
                href="https://www.linkedin.com/in/punam-manna-b11a59328/"
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
                href="https://github.com/punammanna"
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
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <div className="w-96 h-96 rounded-full bg-cyan-400/30 blur-3xl animate-pulseGlow"></div>
            </div>

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

      {/* EDUCATION SECTION */}
      <section className="py-16 px-8 bg-card text-white">
        <div className="container mx-auto max-w-5xl">
          {/* Section Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            My{" "}
            <span className="text-cyan-400 tracking-wide drop-shadow-md">
              Education
            </span>
          </motion.h2>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10
            transition-all duration-300
            hover:-translate-y-3 hover:scale-[1.02]
            hover:border-cyan-400
            hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></div>

            {/* Top 1% Badge */}
            <div className="absolute -top-3 -right-3 z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-yellow-500/50 flex items-center gap-2"
              >
                🏆 Top 1% Achiever
              </motion.div>
            </div>

            <div className="relative">
              {/* Institution */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Bishop Cotton Women's Christian College
                  </h3>
                  <p className="text-lg font-semibold text-gray-200">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </div>
              </div>

              {/* CGPA Display */}
              <div className="mb-4 p-3 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg border border-yellow-500/30">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">⭐</span>
                  <span className="text-lg font-bold text-yellow-400">
                    CGPA: 8.9 - 9.2
                  </span>
                  <span className="text-xs text-gray-400">• Consistent Academic Excellence</span>
                </div>
              </div>

              {/* 100% in Data Structures */}
              <div className="mb-4 p-4 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-2xl">📜</span>
                  <div>
                    <p className="text-sm font-bold text-green-400">
                      Certificate of Merit - Data Structures
                    </p>
                    <p className="text-sm text-gray-300">
                      Scored <span className="text-green-400 font-bold">100/100</span> • Year 2025-26
                    </p>
                  </div>
                </div>
              </div>
            
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">Top 1%</p>
                  <p className="text-xs text-gray-400">Academic Rank</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">100%</p>
                  <p className="text-xs text-gray-400">Data Structures</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-400">8.9-9.2</p>
                  <p className="text-xs text-gray-400">CGPA Range</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}