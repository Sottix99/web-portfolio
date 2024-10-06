import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import CV from '@/assets/icons/cv.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { Hero0rbit } from '@/components/Hero0rbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import miaFoto from '@/assets/images/DSC_1520.jpg';
import miaFoto_2 from '@/assets/images/foto sito.png';
import miaFoto_3 from '@/assets/images/io_saluto.png';



export const HeroSection = () => {
  return (
    <section id = "home" className="py-32 md:py-48 lg:py-60 relative z-9 overflow-x-clip">
      <div className="absolute inset-0" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)" }}>
        <div className="absolute inset-0 -z-8 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <Hero0rbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </Hero0rbit>
        <Hero0rbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </Hero0rbit>
        <Hero0rbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </Hero0rbit>

        <Hero0rbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </Hero0rbit>

        <Hero0rbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </Hero0rbit>

        <Hero0rbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </Hero0rbit>

        <Hero0rbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </Hero0rbit>

        <Hero0rbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </Hero0rbit>

        <Hero0rbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </Hero0rbit>

        <Hero0rbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </Hero0rbit>
      </div>
      <div className="container cicciobello">
        <div className="flex flex-col items-center rounded all">
          <Image
            src={miaFoto_3}
            className="w-28 h-28 object-cover" // w-24 e h-24 imposta larghezza e altezza
            alt="Alessandro Sottile"
          />
          <div className="bg-gray-950 border border-gray-800 py-2 px-3 inline-flex items-center gap-2 rounded-md">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium text-white">
              Open to New Challenges
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Shaping the Future with AI Solutions
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          I'm Alessandro Sottile, a Data Scientist and AI Engineer.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                <a href= '/files/cv_sito.pdf' download>
          <button className="group inline-flex items-center gap-2 px-6 h-12 rounded-xl border border-transparent bg-violet-600 text-gray-900 hover:bg-violet-700 hover:text-white hover:border-violet-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 z-10">
            <span className="font-semibold">Curriculum Vitae</span>
            <CV className="size-6 group-hover:invert transition-all duration-300 ease-in-out" />
          </button>
        </a>

          
<a href="https://www.linkedin.com/in/alessandro-sottile/" target="_blank" rel="noopener noreferrer">
  <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 h-12 px-6 rounded-xl z-10 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
    <span>✌️</span>
    <span className="font-semibold">Let's Connect</span>
  </button>
</a>




        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <a href="#project">
  <button className="inline-flex items-center gap-2 border border-transparent bg-emerald-300 text-gray-900 px-6 h-12 rounded-xl z-10 shadow-md hover:bg-emerald-400 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
    <span className="font-semibold">Discover My Projects</span>
    <ArrowDown className="size-4" />
  </button>
</a>





        </div>
      </div>

      </section>

  );
};


