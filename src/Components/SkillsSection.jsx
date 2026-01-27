import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    { name: "Docker", level: "Advanced" },
    { name: "Jenkins", level: "Advanced" },
    { name: "Kubernetes", level: "Beginner" },
    { name: "AWS", level: "Moderate" },
    { name: "GitHub", level: "Moderate" },
    { name: "Python", level: "Advanced" },
    { name: "React JS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Tailwind", level: "Advanced" },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        {/* SECTION TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          My{" "}
          <span className="text-cyan-400 tracking-wide drop-shadow-md">
            Skills
          </span>
        </motion.h2>

        {/* SKILLS GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative bg-card p-6 rounded-xl border border-white/10
              transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.03]
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
            >
              {/* GLOW RING */}
              <div
                className="absolute inset-0 rounded-xl
                bg-gradient-to-r from-cyan-400 to-orange-500
                opacity-0 group-hover:opacity-30 blur
                transition duration-300"
              ></div>

              <h3 className="relative text-xl font-semibold mb-2">
                {skill.name}
              </h3>

              <p className="relative text-cyan-300 font-medium">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
