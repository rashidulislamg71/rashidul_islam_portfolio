import About from "@/components/About"
import Contact from "@/components/Contact"
import Timeline from "@/components/Edu_Exp"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"



function HomePage() {
  return (
    <div className="h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage