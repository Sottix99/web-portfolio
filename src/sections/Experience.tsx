"use client"
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
import print_3d from '@/assets/images/Stampante-3D-Bambu-Lab-P1S-Combo.png';
import Image from 'next/image';

import JavascripIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import GITHUBIcon from '@/assets/icons/github.svg';
import PYTHONIcon from '@/assets/icons/python.svg';
import RIcon from '@/assets/icons/R.svg';
import SQLIcon from '@/assets/icons/SQL.svg';
import TensorFlowIcon from '@/assets/icons/tensorflow.svg';
import LangChainIcon from '@/assets/icons/langchain.svg';
import PytorchIcon from '@/assets/icons/pytorch.svg';
import DatabricksIcon from '@/assets/icons/databricks.svg';
import OpenAIIcon from '@/assets/icons/openAi.svg';
import AquabioIcon from '@/assets/icons/logo-aquabio.svg';
import SapienzaLogo from "@/assets/icons/logo Sapienza (rgb) NEG.png";
import LeonardoLogo from "@/assets/icons/Leonardo_logo.png";
import AquaBioLogo from "@/assets/icons/logo-aquabio-footer.png";

import mapImage from '@/assets/images/VT_2.png';
import smileMemoji from '@/assets/images/memoji-smile.png';

import { CardHeader } from '@/components/CardHeader';
import { ExpHeader } from '@/components/ExperienceHeader';
import { ToolBoxItems } from '@/components/ToolBoxItems_2';

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
    <Card className="h-[320px] md:col-span-1 lg:col-span-1">
<ExpHeader title="Data Scientist / AI Engineer" 
description="During my internship, I worked on developing generative AI solutions using LangChain, analyzing and managing
data on Databricks using Python and SQL, and creating dashboards with Power BI" />

    </Card>


    <Card className="h-[320px] md:col-span-1 lg:col-span-1 flex items-center p-10">
    <div className="">
                <Image
                    src={AquaBioLogo} 
                    className="w-24 h-auto" // Imposta la dimensione dell'immagine come necessario 
                />
            </div>
            <ExpHeader 
                title="External AI Consultant" 
                description="I served as an external consultant with the main focus on increasing digitalization within the company" 
            />
        </Card>

    <Card className="h-[320px] md:col-span-1 lg:col-span-1">

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
