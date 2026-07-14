import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:work.punammanna@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email", detail: "work.punammanna@gmail.com", link: "mailto:work.punammanna@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, title: "Phone", detail: "+91 7338638489", link: "tel:+917338638489" },
    { icon: <MapPin className="w-6 h-6" />, title: "Location", detail: "Bengaluru, Karnataka", link: null },
  ];

  const socialLinks = [
    { icon: <Github />, link: "https://github.com/punammanna", label: "GitHub" },
    { icon: <Linkedin />, link: "https://www.linkedin.com/in/punam-manna-b11a59328/", label: "LinkedIn" },
    { icon: <Instagram />, link: "https://www.instagram.com/punammanna", label: "Instagram" },
  ];

  const popVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-darkCyan via-cyan to-darkCyan py-24 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 variants={popVariant} className="text-5xl md:text-6xl font-bold text-[#15d1e9] mb-4">
            Get In Touch
          </motion.h2>
          <motion.div variants={popVariant} className="w-28 h-1 bg-gradient-to-r from-cyan to-orange mx-auto mb-6"></motion.div>
          <motion.p variants={popVariant} className="text-lightCyan max-w-2xl mx-auto text-lg">
            Let’s build something amazing together — reach out anytime!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-14">

          {/* LEFT INFO */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link || "#"}
                variants={popVariant}
                className="group relative flex items-center gap-5 p-6 rounded-2xl bg-black/40 border border-cyan/30
                  transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]
                  hover:border-cyan hover:shadow-[0_0_30px_rgba(21,209,233,0.6)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan to-orange opacity-0 group-hover:opacity-30 blur transition"></div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan to-orange relative z-10">{info.icon}</div>
                <div className="relative z-10">
                  <p className="text-cyan-300 text-sm">{info.title}</p>
                  <p className="text-white font-semibold">{info.detail}</p>
                </div>
              </motion.a>
            ))}

            {/* SOCIALS */}
            <motion.div className="pt-8" variants={popVariant}>
              <p className="text-cyan-300 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    variants={popVariant}
                    className="group relative p-4 rounded-xl bg-black/40 border border-cyan/30
                      transition-all hover:scale-110 hover:border-cyan hover:shadow-[0_0_25px_rgba(21,209,233,0.6)]"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan to-orange opacity-0 group-hover:opacity-40 blur transition"></div>
                    <span className="relative z-10">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="lg:col-span-3 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={popVariant}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-orange rounded-3xl blur opacity-25"></div>
            <div className="relative bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-cyan/40">
              <h3 className="text-3xl font-bold mb-8 text-white">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                {["name", "email", "subject"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`px-5 py-4 rounded-xl bg-darkCyan/60 border focus:outline-none transition-all
                      ${focusedField === field
                        ? "border-cyan shadow-[0_0_25px_rgba(21,209,233,0.6)] scale-[1.02]"
                        : "border-cyan/40"}`}
                  />
                ))}

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`md:col-span-2 px-5 py-4 rounded-xl bg-darkCyan/60 border resize-none focus:outline-none transition-all
                    ${focusedField === "message"
                      ? "border-orange shadow-[0_0_25px_rgba(255,87,34,0.6)] scale-[1.02]"
                      : "border-cyan/40"}`}
                />

                <button
                  type="submit"
                  className="md:col-span-2 mt-4 py-4 rounded-xl bg-gradient-to-r from-cyan to-orange
                    font-semibold text-lg transition-all flex items-center justify-center gap-2
                    hover:scale-105 hover:shadow-[0_0_35px_rgba(255,87,34,0.7)]"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
