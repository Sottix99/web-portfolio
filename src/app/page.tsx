import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ExpSection } from "@/sections/Experience";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="container">
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6"> Highlighted Projects </h2>
      <div className="md:text-lg lg:text-xl text-white/60  text-center mt-6 pb-16 lg:py-24"> {/* Add margin here */}
        <p className=" md:text-lg lg:text-xl text-white/60 mt-2">
        I am a <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Data Scientist</span> with a solid academic background in Data Science and Statistics from Sapienza University of Rome. I specialize in machine learning and data management, having worked at several companies to develop <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">AI solutions</span> that enhance decision-making. I am interested in helping businesses leverage artificial intelligence for growth, both in the <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Tuscia Viterbese</span> region and beyond. I believe innovation is key to future success.</p>
      </div>
      </div>
      <ExpSection />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

