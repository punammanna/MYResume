import { useState } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

import virtualAIImg from "../assets/images/virtualai.jpeg";
import goldenFrameImg from "../assets/images/GoldenFrame.png";
import koshmegaImg from "../assets/images/koshmega.png";
import weatherAppImg from "../assets/images/weather-app.png";
import staticWedImg from "../assets/images/Static_wed.png";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "🌸KoshMega – Business Website",
      description:
        "A beautiful and responsive business website built using HTML and CSS with a clean, modern design.",
      image: { src: koshmegaImg },
      category: "Webdevelopment",
      tech: ["HTML", "CSS", "Vercel"],
      github: "https://github.com/punammanna/koshmega",
      live: "https://koshmega.vercel.app",
    },
    {
      id: 2,
      title: "NewRell – Movie Ticket Booking App",
      description:
        "A modern movie ticket booking web app built with React, featuring seat selection and a responsive UI.",
      image: { src: goldenFrameImg },
      category: "Webdevelopment",
      tech: ["React", "JavaScript", "Tailwind", "Vercel"],
      github: "https://github.com/punammanna/NewRell",
      live: "https://new-rell.vercel.app",
    },
    {
      id: 3,
      title: "Virtual AI – Interactive Web Assistant",
      description:
        "Interactive AI web application with React, clean UI, and responsive design.",
      image: { src: virtualAIImg },
      category: "Webdevelopment",
      featured: true,
      tech: ["React", "JavaScript", "Tailwind", "Vercel"],
      github: "https://github.com/punammanna/VirtualAI",
      live: "https://virtual-ai-olive.vercel.app/",
    },
    {
      id: 5,
      title: "Weather App – Real-Time Weather Forecast",
      description:
        "A responsive weather application providing real-time weather updates for any location.",
      image: { src: weatherAppImg },
      category: "Dockerfile",
      tech: ["HTML", "CSS", "Dockerfile", "Vercel", "API"],
      github: "https://github.com/punammanna/Weather-App",
      live: "https://weather-app-delta-flax-52.vercel.app",
    },
    {
      id: 6,
      title: "AWS S3 Static Website Hosting",
      description:
        "Deployed a static website on AWS S3 with public access configuration, bucket policy, and website hosting enabled.",
      image: { src: staticWedImg },
      category: "AWS",
      tech: ["AWS S3", "HTML", "CSS", "Static Hosting", "DevOps"],
      github: "https://github.com/punammanna/static-wed.git",
      live: "http://my-static-wedsite.s3-website.ap-south-1.amazonaws.com",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: <Globe className="w-4 h-4" /> },
    { id: "Webdevelopment", label: "Webdevelopment", icon: <Code className="w-4 h-4" /> },
    { id: "Dockerfile", label: "Dockerfile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "AWS", label: "AWS", icon: <Palette className="w-4 h-4" /> },
  ];

  const filteredProjects = (
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter)
  ).sort((a, b) => (b.featured === true) - (a.featured === true));

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-darkCyan via-cyan to-darkCyan py-12 px-3 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#15d1e9]">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-orange mx-auto mb-4"></div>
          <p className="text-lightCyan max-w-2xl mx-auto">
            A collection of my recent work showcasing different skills and technologies.
          </p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyan to-orange text-white scale-105 shadow-[0_0_20px_rgba(0,255,255,0.7)]"
                  : "bg-white/5 text-gray-400 hover:text-white hover:scale-105"
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 18,
                delay: index * 0.15,
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-xl overflow-hidden bg-black border border-white/10
              transition-shadow duration-500
              hover:border-cyan
              hover:shadow-[0_0_35px_rgba(0,255,255,0.6)]"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-orange-500 opacity-0 group-hover:opacity-30 blur transition duration-300"></div>

              <img
                src={project.image.src}
                alt={project.title}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 relative z-10 will-change-transform"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-black/80 to-transparent z-20">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-3 line-clamp-2 text-sm">
                  {project.description}
                </p>

                <div className="flex gap-2 mb-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:scale-110 transition"
                  >
                    <Github className="text-white w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:scale-110 transition"
                  >
                    <ExternalLink className="text-white w-5 h-5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-[10px] md:text-xs bg-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
