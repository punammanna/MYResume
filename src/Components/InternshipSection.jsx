// InternshipSection.jsx
import React from "react";
import { motion } from "framer-motion";

const InternshipSection = () => {
  const internships = [
    {
      company: "WORK WALLET TECHNOLOGIES PVT LTD",
      role: "DevOps Intern",
      duration: "15th Jan 2026 - 26th April 2026",
      location: "Hyderabad, Telangana",
      description: [
        "Worked with the Deployment Team on backend development tasks",
        "Contributed to CI/CD pipeline implementation and maintenance",
        "Demonstrated dedication and professionalism in carrying out responsibilities",
        "Showed keen interest in learning and improving technical skills"
      ],
      certificate: true,
      certificateId: "U18B023S0067"
    }
  ];

  return (
    <section id="internship" className="py-16 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-background to-gray-900/20">
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
            Internship
          </span>
          <span className="block text-sm font-normal text-gray-400 mt-2">
            💼 Professional Experience
          </span>
        </motion.h2>

        {/* Internship Card */}
        <div className="relative">
          {/* Decorative Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-start md:pr-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-background shadow-lg shadow-cyan-400/50 z-10 mt-1">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40"></div>
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 w-full">
                  <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto">
                    <motion.div
                      className="group relative bg-card p-6 rounded-xl border border-white/10
                      transition-all duration-300
                      hover:-translate-y-2 hover:scale-[1.02]
                      hover:border-cyan-400
                      hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 blur transition duration-300"></div>

                      {/* Certificate Badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-yellow-500/30 animate-pulse">
                        🏆 Certified
                      </div>

                      <div className="relative">
                        {/* Company Header */}
                        <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                          <h3 className="text-xl font-bold text-cyan-400">
                            {internship.company}
                          </h3>
                          <span className="text-xs font-medium text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30 whitespace-nowrap">
                            {internship.duration}
                          </span>
                        </div>

                        {/* Role */}
                        <p className="text-lg font-semibold text-gray-200 mb-1">
                          {internship.role}
                        </p>
                        
                        {/* Location */}
                        <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                          <span>📍</span> {internship.location}
                        </p>

                        {/* Certificate ID */}
                        {internship.certificate && (
                          <div className="mb-3 p-2 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">
                            <p className="text-xs text-cyan-300">
                              <span className="font-bold">Certificate ID:</span> {internship.certificateId}
                            </p>
                          </div>
                        )}

                        {/* Description */}
                        <ul className="space-y-2">
                          {internship.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span className="text-sm">{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Director Signature */}
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-400">Signed by</p>
                              <p className="text-sm font-semibold text-cyan-300">G Anil Kumar Goud</p>
                              <p className="text-xs text-gray-500">Director</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-400">Issued on</p>
                              <p className="text-sm text-gray-300">20th April 2026</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;