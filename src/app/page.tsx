import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="container">
      <div className="md:text-lg lg:text-xl text-white/60  text-center mt-6 pb-16 lg:py-24"> {/* Add margin here */}
        <p className=" md:text-lg lg:text-xl text-white/60 mt-2">
        I am a Data Scientist with a solid academic background in Data Science and Statistics from Sapienza University of Rome. I specialize in machine learning and data management, having worked at several companies to develop AI solutions that enhance decision-making. I am interested in helping businesses leverage artificial intelligence for growth, both in the Tuscia Viterbese region and beyond. I believe innovation is key to future success.</p>
      </div>
      </div>
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

