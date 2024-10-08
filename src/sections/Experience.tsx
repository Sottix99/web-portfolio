"use client"
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { CardEXP } from '@/components/Card_exp';
import StarIcon from '@/assets/icons/star.svg';
import print_3d from '@/assets/images/Stampante-3D-Bambu-Lab-P1S-Combo.png';
import Image from 'next/image';


import SapienzaLogo from "@/assets/icons/logo Sapienza (rgb) NEG.png";
import LeonardoLogo from "@/assets/icons/Leonardo_logo.png";
import AquaBioLogo from "@/assets/icons/logo-aquabio-footer.png";
import BipLogo from "@/assets/icons/FB_BIP_LOGO_RGB_POS.png"
import SorridiLogo from "@/assets/icons/sorridi.png"

import { ExpHeader } from '@/components/ExperienceHeader';


import {motion} from 'framer-motion';
import { useRef } from 'react';




const hobbies = [


]


export const ExpSection = () => {
  const constraintRef= useRef(null);
  return (
  <section id = "Experiences" className="pb-20 lg:py-28">

    <div className="container">
    <SectionHeader 
      eyebrow="My experiences"
      title="A Journey Through My Professional Growth"
      description="Explore the milestones that have shaped my path, from academic achievements to impactful work experiences."
    />


  <div className="mt-20 flex flex-col gap-8">
    <div className=' grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'>
    
    <Card className="relative h-[320px] md:col-span-1 lg:col-span-1 p-10 group overflow-hidden">
  {/* Contenitore per il titolo e il logo */}
  <div className="flex flex-col items-center">
    {/* Titolo che rimane fisso sopra */}
    <ExpHeader 
      title="Data Scientist / AI Engineer"
      description=""  // Descrizione nascosta inizialmente
    />
    
    {/* Logo grande e centrato sotto il titolo */}
    <div className="mt-4 transition-all duration-300 transform -translate-y-5 group-hover:translate-y-20 group-hover:scale-75">
      <Image
        src={BipLogo}
        className="w-40 h-auto filter brightness-0 invert transition-all duration-300 group-hover:w-24" 
        // Il logo diventa più piccolo e si sposta verso il basso su hover
      />
    </div>
  </div>

  {/* Testo nascosto che appare al posto del logo su hover */}
  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-white text-center" style={{ marginLeft: "30px", marginRight: "30px" }}>
    I'm working on developing generative AI solutions using LangChain, analyzing and managing
    data on Databricks using Python and SQL, and creating dashboards with Power BI
    </p>
  </div>
</Card>

<Card className="relative h-[320px] md:col-span-1 lg:col-span-1 p-10 group overflow-hidden border-2 border-transparent hover:border-3 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg">
  {/* Contenitore per il titolo e il logo */}
  <div className="flex flex-col items-center">
    {/* Titolo che rimane fisso sopra */}
    <ExpHeader 
      title="External AI Consultant"
      description=""  // Descrizione nascosta inizialmente
    />
    
    {/* Logo grande e centrato sotto il titolo */}
    <div className="mt-4 transition-all duration-300 transform -translate-y-5 group-hover:translate-y-20 group-hover:scale-75">
    <Image
  src={AquaBioLogo}
  className="w-40 h-auto filter brightness-0 invert transition-all duration-300 group-hover:w-24 group-hover:filter-none group-hover:text-emerald-300" 
  // Il logo diventa più piccolo e si sposta verso il basso su hover
/>
    </div>
  </div>

  {/* Testo nascosto che appare al posto del logo su hover */}
  <div className="mt-4 absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-white text-center">
      I served as an external consultant with the main focus on increasing digitalization within the company.
    </p>
  </div>
</Card>





    <Card className="h-[320px] md:col-span-1 lg:col-span-1 flex items-center p-10">
    <div className="">
                <Image
                    src={SorridiLogo} 
                    className="w-24 h-auto filter brightness-0 invert" // Imposta la dimensione dell'immagine come necessario 
                />
            </div>
<ExpHeader title="External AI Consultant" 
description="I was part of a team tasked with developing deep learning models to identify the right type of aligner for each client
based on photos of their mouth. Various neural network architectures were used, both creating models from scratch
and applying fine-tuning to those from HuggingFace.
" />



    </Card>
    <Card className="h-[320px] md:col-span-1 lg:col-span-1 flex items-center p-10">
    <div className="">
                <Image
                    src={SapienzaLogo} 
                    className="w-24 h-auto" // Imposta la dimensione dell'immagine come necessario 
                />
            </div>
<ExpHeader title="MSc in Data Science" 
description="During my university course, delivered entirely in English, I collaborated on original projects using state-of-the-art technologies in the fields of deep learning, machine learning, data analysis, and data management.
These projects dealt with a wide range of data, including texts, numbers, images, and 3D scans.
" />



    </Card>

    <Card className="h-[320px] md:col-span-1 lg:col-span-1 flex items-center p-10">
    <div className="">
                <Image
                    src={LeonardoLogo} 
                    className="w-24 h-auto" // Imposta la dimensione dell'immagine come necessario 
                />
            </div>
    <ExpHeader
    title="Training Camp"
    description=" During the Training Camp of Leonardo SpA, I enhanced my skills in the field of
deep learning through theoretical and practical lessons. Applying this knowledge to the task of image
classification on photos of various categories of ships."
    className=""
  />
</Card>


<Card className="h-[320px] md:col-span-1 lg:col-span-1 flex items-center p-10">
            <div className="">
                <Image
                    src={SapienzaLogo} 
                    className="w-24 h-auto" // Imposta la dimensione dell'immagine come necessario 
                />
            </div>
            <ExpHeader 
                title="Bachelor in Statistics" 
                description="During my studies, I acquired a solid foundation of knowledge in statistical disciplines,
                both theoretical and applied, complemented by extensive training in Computer Science, Mathematics, and
                Probability."
            />
        </Card>



</div>
<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-8'>

</div>
  </div>
  </div>
  </section>
  );
};
