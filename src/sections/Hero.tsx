import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { Hero0rbit } from '@/components/Hero0rbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import miaFoto from '@/assets/images/DSC_1520.jpg';


export const HeroSection = () => {
  return (
    <div className="wrapper_ok">
    
    <div className="py-32 md:py-48 lg:py-60 relative -z-9 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%, black_70%,transparent)]">
        <div className="absolute inset-0 -z-8 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring -z-4"></div>
        <div className="size-[820px] hero-ring -z-5"></div>
        <div className="size-[1020px] hero-ring -z-6"></div>
        <div className="size-[1220px] hero-ring -z-7"></div>

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

    </div>

      <div className="container cicciobello">
        <div className="flex flex-col items-center rounded all">
          <Image
            src={miaFoto}
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
            I am a Data Scientist/AI engineer. I possess
            advanced skills in Deep Learning, Generative AI, Data Analysis and Management.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Discover My Projects</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-violet-100 text-gray-900 hover:bg-white/70 hover:text-gray-900 transition-colors duration-300 h-12 px-6 rounded-xl">
            <a className="flex items-center gap-2">
              <span>✌️</span>
              <span className="font-semibold">Let's Connect</span>
            </a>
          </button>


        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 px-6 h-12 rounded-xl border border-white/15 bg-violet-500 hover:bg-violet-600  ">
            <span className="font-semibold">Curriculum Vitae</span>
            <ArrowDown className="size-4" />
          </button>


        </div>
      </div>
    </div>
  );
};


