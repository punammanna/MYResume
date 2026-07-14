import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

// Import your certificate images with correct names
import DevOpsCert from "../assets/images/devops_certi.jpeg";
import HTMLCert from "../assets/images/HTML_certi.jpeg";
import CSSCert from "../assets/images/css_certi.jpeg";

const CertificateSection = () => {
  const certificates = [
    {
      title: "Free DevOps Bootcamp",
      organization: "TWS (The WebShala)",
      date: "2026",
      description: "Completed Free DevOps Bootcamp with extraordinary performance",
      skills: ["Docker", "Jenkins", "Kubernetes", "AWS", "Terraform"],
      icon: "☁️",
      color: "from-cyan-400 to-blue-500",
      image: DevOpsCert,
      type: "Bootcamp"
    },
    {
      title: "HTML Certification",
      organization: "Prashant Jain - YouTube Course",
      date: "12 September 2024",
      description: "Successfully completed HTML Certification Test",
      skills: ["HTML5", "Semantic HTML", "Forms", "Accessibility"],
      icon: "🌐",
      color: "from-orange-400 to-red-500",
      image: HTMLCert,
      certificateId: "R44MSU30",
      type: "Course"
    },
    {
      title: "CSS Certification",
      organization: "Prashant Jain - YouTube Course",
      date: "05 December 2024",
      description: "Successfully completed CSS Certification Test",
      skills: ["CSS3", "Flexbox", "Grid", "Animations", "Responsive Design"],
      icon: "🎨",
      color: "from-blue-400 to-indigo-500",
      image: CSSCert,
      certificateId: "OJHBU4CO",
      type: "Course"
    }
  ];

  return (
    <section id="certificates" className="py-16 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-background to-gray-900/20">
      <div className="container mx-auto max-w-6xl">
        
        {/* SECTION TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          My{" "}
          <span className="text-cyan-400 tracking-wide drop-shadow-md">
            Certificates
          </span>
          <span className="block text-sm font-normal text-gray-400 mt-2">
            🏆 Professional Certifications & Achievements
          </span>
        </motion.h2>

        {/* Certificate Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
        >
          <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300">
            <p className="text-3xl font-bold text-cyan-400">{certificates.length}</p>
            <p className="text-xs text-gray-400">Total Certificates</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-white/5 hover:border-yellow-400/30 transition-all duration-300">
            <p className="text-3xl font-bold text-yellow-400">1</p>
            <p className="text-xs text-gray-400">DevOps Cert</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-white/5 hover:border-orange-400/30 transition-all duration-300">
            <p className="text-3xl font-bold text-orange-400">1</p>
            <p className="text-xs text-gray-400">HTML Cert</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-white/5 hover:border-blue-400/30 transition-all duration-300">
            <p className="text-3xl font-bold text-blue-400">1</p>
            <p className="text-xs text-gray-400">CSS Cert</p>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {certificates.map((cert, index) => {
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative bg-card p-6 rounded-xl border border-white/10
                transition-all duration-300
                hover:-translate-y-3 hover:scale-[1.03]
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 blur transition duration-300`}></div>

                {/* Certificate Badge */}
                <div className="absolute -top-2 -right-2 z-10">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black flex items-center gap-1 shadow-lg">
                    <FaCertificate className="text-xs" />
                    {cert.type}
                  </span>
                </div>

                <div className="relative">
                  {/* Certificate Image */}
                  <div className="mb-4 rounded-lg overflow-hidden border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${cert.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 text-2xl`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-200 group-hover:text-cyan-400 transition-colors line-clamp-1">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gray-400">{cert.organization}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Date and ID */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-medium text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full border border-gray-700">
                      📅 {cert.date}
                    </span>
                    {cert.certificateId && (
                      <span className="text-xs font-medium text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full border border-gray-700">
                        🆔 {cert.certificateId}
                      </span>
                    )}
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-white/10">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-gray-800/50 border border-white/10 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400 border border-gray-800/50 rounded-xl p-4 inline-block px-8 bg-gray-900/30 backdrop-blur-sm">
            ✨ Continuously learning and adding new certifications
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;