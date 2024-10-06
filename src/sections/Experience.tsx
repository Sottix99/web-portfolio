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

const toolboxItems = [
  {
    title: 'Python',
    iconType: PYTHONIcon,
  },
  {
    title: 'SQL',
    iconType: SQLIcon,
  },
  {
    title: 'R',
    iconType: RIcon,
  },
  {
    title: 'PowerBI',
    iconType: RIcon,
  },
  {
    title: 'LangChain',
    iconType: LangChainIcon,
  },
  {
    title: 'Pytorch',
    iconType: PytorchIcon,
  },

  {
    title: 'TensorFlow',
    iconType: TensorFlowIcon,
  },

  {
    title: 'GitHub',
    iconType: GITHUBIcon,
  },

  {
    title: 'Databricks',
    iconType: DatabricksIcon,
  },

  {
    title: 'OpenAI ',
    iconType: OpenAIIcon,
  },
];


const hobbies = [

  {
    title: 'Gym',
    emoji: '🏋🏻',
    left:'5%',
    top:'5%',

  },

  {
    title: 'Photography',
    emoji: '📷',
    left:'40%',
    top:'5%',
  },


  {
    title: 'Astronomy',
    emoji: '🔭',
    left:'10%',
    top:'35%',
  },

  {
    title: 'Botany',
    emoji: '🌱',
    left:'35%',
    top:'40%',
  },

  {
    title: 'Videogames',
    emoji: '🎮',
    left:'70%',
    top:'45%',
  },

  {
    title: '3D printing',
    emoji: '🖨️',
    left:'5%',
    top:'65%',
  },

  {
    title: 'Football',
    emoji: '⚽',
    left:'45%',
    top:'70%',
  },

  {
    title: 'Reading',
    emoji: '📖',
    left:'70%',
    top:'5%',
  }

]


export const ExpSection = () => {
  const constraintRef= useRef(null);
  return (
  <section id = "about" className="pb-20 lg:py-28">

    <div className="container">
    <SectionHeader 
    eyebrow="My experiences"
    title =""
    description ="" />


  <div className="mt-20 flex flex-col gap-8">
    <div className=' grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-2'>
      
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
<CardHeader title="3D Printing" 
description="Discover the endless possibilities of 3D printing! 
 I am open to commissions." />
<div className="w-40 mx-auto mt-2 md:mt-0">
<Image src={print_3d} alt="Book cover" />
</div>


    </Card>
    <Card className="h-[320px]  md:col-span-2 lg:col-span-1">
    <CardHeader
    title="My Toolbox"
    description="Uncover the Cutting-Edge Tools and Technologies Behind Data-Driven and AI-Powered Solutions"
    className=""
  />
  
 <ToolBoxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
 <ToolBoxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
</Card>
</div>
<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-8'>


<Card className='h-[320px] p-0 flex flex-col md:col-span-2 lg:col-span-1'>
<CardHeader title="Beyond the Code" 
description="Explore my interests and hobbies beyond the digital realm" className='px-6 py-6' />
  <div className='relative flex-1' ref= {constraintRef }>

    {hobbies.map(hobby => (
      <motion.div key={hobby.title} className="cursor-grab inline-flex items-center gap-2 px-6 bg-gradient-to-r 
      from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{left: hobby.left, top: hobby.top,}} drag dragConstraints={constraintRef}>
        <span className="font-medium text-gray-950">{hobby.title}</span>
        <span>{hobby.emoji}</span>
      </motion.div>
    ))}

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
