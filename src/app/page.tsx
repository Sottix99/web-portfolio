import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ExpSection } from "@/sections/Experience";

<span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Data Scientist</span>
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="container">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center bg-clip-text text-transparent">
      My Vision
      </p>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6"> Driven by Innovation  </h2>
      <div className="md:text-lg lg:text-xl text-white/60  text-center mt-6 pb-16 lg:py-24"> {/* Add margin here */}
        <p className=" md:text-lg lg:text-xl text-white/60 mt-2">
        I am a <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Data Scientist</span> passionate about innovation and technology, with a strong academic background in <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Data Science</span> and <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Statistics</span> from "Sapienza" University of Rome. I possess advanced skills in <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">machine learning</span>, <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">deep learning</span>, and <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">data management</span>, and have worked on projects ranging from text analysis to image classification, predictive modeling, and data-driven decision systems. My expertise spans <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">various industries</span>, allowing me to adapt solutions to different challenges.</p>
        <br></br>
        <p className=" md:text-lg lg:text-xl text-white/60 mt-2">
        I have participated in various projects, both within companies and at the university, focusing on <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">AI development</span>, <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">data management</span>, and <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">analysis</span> to create tailored solutions that enhance decision-making and optimize data usage. Through these projects and collaborations, I have helped in <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">leverage AI</span> for smarter decision-making. I believe in the transformative power of technology to improve business efficiency and competitiveness.</p>
        <br></br>
        <p className=" md:text-lg lg:text-xl text-white/60 mt-2">
        I am seeking <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">exciting opportunities</span> to apply my skills and contribute to <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">innovative solutions</span>. My goal is to assist companies, including those in the <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Tuscia Viterbese</span> region, in leveraging artificial intelligence to tackle the challenges of a rapidly evolving market. For more on how I’ve applied my expertise in AI and data science to solve real-world challenges, explore my work experiences and projects below. I am convinced that innovation is essential for <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">future success</span>, both locally and globally.</p>    
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

