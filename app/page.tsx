import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import GitHubStats from "@/components/sections/GitHubStats";
import Contact from "@/components/sections/Contact";
import CursorFollower from "@/components/ui/CursorFollower";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
