import About from "@/components/About";
import GalaxyBackground from "@/components/BackgroundEffects ";
import Contact from "@/components/Contact";
import Timeline from "@/components/Edu_Exp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function HomePage() {
  return (
    <div className="min-h-screen relative bg-[#020617] px-5 mx-auto max-w-7xl">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
      <GalaxyBackground />
    </div>
  );
}

export default HomePage;
