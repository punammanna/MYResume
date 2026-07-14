import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Herosection";
import ProjectsSection from "./Components/ProjectsSection";
import SkillsSection from "./Components/SkillsSection";
import Contact from "./Components/Contact";   
import InternshipSection from "./Components/InternshipSection";
import CertificateSection from "./Components/CertificateSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <InternshipSection/>
      <CertificateSection/>
      <ProjectsSection />
      <Contact />   
    </>
  );
}

export default App;
