import schema from "@/assets/images/schemaboh.png";
import caligola from "@/assets/images/Remove background project.png";
import couple_5426 from "@/assets/images/Couple_5426.gif";
import Bitcoin from "@/assets/images/Bitcoin.svg.png";
import tooth from "@/assets/images/Tooth.png";
import graph from "@/assets/images/sistemare.png";
import leaf from "@/assets/images/leaf.png";
import Image from 'next/image';
import CheckCircleicon from '@/assets/icons/check-circle.svg';
import ArrowUpRigthIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
const portfolioProjects = [
  {
    company: "Master Thesis",
    year: "2024",
    title: "Point cloud transformers for 3D fragment matching",
    results: [
      { title: "This project, part of a master's thesis in Data Science at Sapienza University, focuses on using deep learning models to assist in the reconstruction of fragmented artifacts. By leveraging Point Cloud Transformers (PCTs), the goal is to develop a neural network capable of predicting whether two 3D object fragments are adjacent. This technology offers practical support to archaeologists working to piece together historical artifacts, enhancing the reconstruction process with artificial intelligence." },

    ],
    link: "https://github.com/Sottix99/Point-cloud-transformers-for-3D-fragment-matching",
    image: caligola,
  },
  {
    company: "Univerisity project",
    year: "2023",
    title: "Bitcoin Price Forecasting and Sentiment Analysis using Tweets",
    results: [
      { title: "The project aims to forecast Bitcoin prices by analyzing Twitter sentiment data. By using machine learning techniques and sentiment analysis, it identifies indicators that correlate with Bitcoin price movements. Various natural language processing models and forecasting methods are employed to improve prediction accuracy." },

    ],
    link: "https://github.com/Sottix99/Bitcoin-Price-Forecasting-and-Sentiment-Analysis-using-Tweets",
    image: Bitcoin,
  },
  {
    company: "Univerisity project / Sorridi srl",
    year: "2023",
    title: "Deep Learning for Orthodontic Photos",
    results: [
      { title: "This project explores the application of machine learning and deep learning techniques to classify orthodontic images for treatment planning. Partnering with the aligner company Sorridi, the goal is to automate the pre-evaluation process, which is currently done manually by technicians. By analyzing dental photos, the system aims to classify treatment categories such as Soft, Semi-Medium, Medium, Semi-Hard, and Hard based on various dental conditions." },

    ],
    link: "https://github.com/Sottix99/Deep-Learning-for-Orthodontic-Photos",
    image: tooth,
  },
  {
    company: "Univerisity project",
    year: "2023",
    title: "Leaf Disease Classification",
    results: [
      { title: "This project focuses on the automatic classification of corn leaf diseases using deep neural networks. The dataset includes over 4000 images categorized into four classes: Common Rust, Gray Leaf Spot, Blight, and Healthy. Through the use of Convolutional Neural Networks (CNNs) and advanced deep learning techniques, the model achieves a classification accuracy of 91.5%. This solution is highly effective for early disease detection in plants, with strong potential for agricultural applications." },
    ],
    link: "https://github.com/Sottix99/Leaf-Disease-Classification",
    image: leaf,
  },
  {
    company: "Univerisity project",
    year: "2023",
    title: "Football Transfers Network Analisys",
    results: [
      { title: "This project delves into the intricate dynamics of the European football transfer market, analyzing player movements between top clubs across the seven major European leagues from 1992 to 2022. By modeling the transfer market as a complex network, where clubs are nodes and player transfers are weighted links, the project uncovers evolving trends in team interactions, transfer fees, and market structure." },
    ],
    link: "https://github.com/Sottix99/Football-Transfers-Network-Analisys",
    image: graph,
  },
  

];

export const ProjectsSection = () => {
  return (

    <section id = "project" className="pb-16 lg:py-24">
      <div className="container">
      <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center bg-clip-text text-transparent">
      Real-World Impact
      </p>
      </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6"> Highlighted Projects </h2>

        <p className= "text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">Discover the solutions I've crafted to tackle real-world challenges.</p>
        <div className=" mt-10 md:mt-20 flex flex-col gap-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden
             after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline
              after:-outline-offset-2 after:rounded-3xl 
              after:outline-white/20 20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20  sticky" style={{
                top: `calc(64px + ${projectIndex *20}px`
              }}>
                

                <div className="absolute inset-0 -z-10 opacity-5"
                 style={{backgroundImage: `url(${grainImage.src})` }}></div>
                 <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
              
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex  gap-2
                font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-serif text-2xl mt-2  md:mt-5md:text-4xl">{project.title}</h3>
            <hr className=" border-t-2 border-white/5 mt-4 md:mt-5" />

              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li className="flex gap-2 md:text-base text-sm text-white/50"> 
                    
                  <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
              <button className="text-gray-900 bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-semibold items-center px-6 h-12 rounded-xl w-max border border-gray-900 z-20 gap-2 mt-8"> 
                <span>More details</span>
                <ArrowUpRigthIcon className = "size-4"/>
                </button>
              </a>
              </div>
              <div className="relative">
              <Image src={project.image} alt={project.title} className=" mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "/>
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




