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



import mapImage from '@/assets/images/VT_2.png';
import smileMemoji from '@/assets/images/memoji-smile.png';

import { CardHeader } from '@/components/CardHeader';
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
    <div className=' grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-1'>
      
    <Card className="h-[320px] md:col-span-1 lg:col-span-1">
<CardHeader title="Master Degree in Data Science" 
description="During my university course, delivered entirely in English, I collaborated on original projects using state-ofthe-art technologies in the fields of deep learning, machine learning, data analysis, and data management.
These projects dealt with a wide range of data, including texts, numbers, images, and 3D scans. The
projects are available for consultation on my Github repository.
" />
<div className="w-40 mx-auto mt-2 md:mt-0">
<Image src={print_3d} alt="Book cover" />
</div>


    </Card>
    <Card className="h-[320px]  md:col-span-1 lg:col-span-1">
    <CardHeader
    title="Trainingcamp Leonardo SpA"
    description="Uncover the Cutting-Edge Tools and Technologies Behind Data-Driven and AI-Powered Solutions"
    className=""
  />
</Card>

<Card className="h-[320px] md:col-span-1 lg:col-span-1">
<CardHeader title="Bachelor Degree in statistics" 
description="Discover the endless possibilities of 3D printing! 
 I am open to commissions." />
<div className="w-40 mx-auto mt-2 md:mt-0">
<Image src={print_3d} alt="Book cover" />
</div>


    </Card>
    <Card className="h-[320px]  md:col-span-1 lg:col-span-1">
    <CardHeader
    title="My Toolbox"
    description="Uncover the Cutting-Edge Tools and Technologies Behind Data-Driven and AI-Powered Solutions"
    className=""
  />
</Card>



</div>
<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-8'>


<Card className='h-[320px] p-0 flex flex-col md:col-span-2 lg:col-span-1'>
<CardHeader title="Beyond the Code" 
description="Explore my interests and hobbies beyond the digital realm" className='px-6 py-6' />
  <div className='relative flex-1' ref= {constraintRef }>


  </div>
</Card>
<Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
 <Image src={mapImage}  alt="map" className='h-full w-full object-cover absolute object-left-top'/>
 <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-2 after:rounded-full after:outline-gray-950/30">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
 <Image src={smileMemoji}  alt="smiling memoji" className="size-20" />
 </div>
</Card>
</div>
  </div>
  </div>
  </section>
  );
};
