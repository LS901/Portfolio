import React, {useRef} from 'react';
import { motion } from 'framer-motion'
import TSImage from '../../public/images/skills/Typescript_2020.svg.png';
import TailwindImage from '../../public/images/skills/Tailwind.svg';
import PostgresImage from '../../public/images/skills/PostgreSQL.svg';
import NextImage from '../../public/images/skills/Next.jpg';
import ReactImage from '../../public/images/skills/React-icon.svg.png';
import VercelImage from '../../public/images/skills/Vercel.svg';

import Image from 'next/image'
import AnimatedText from "@/components/AnimatedText";

const skillTransition = (y, delay) => {
    return {
        hidden: {
            opacity: 0,
            y
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay
            }
        }
    }
}
const Skill = ({name, image, className, delay}) => {
    const ref = useRef(null);
    return (
        <div className='flex flex-col items-center pb-8'>
            <motion.div className='py-8 font-light text-2xl'
                        variants={skillTransition(-50, delay)}
                        whileInView='visible'
                        viewport={{ once: true}}
                        initial='hidden'
                        animate='animate'>
                <Image src={image} alt='skill' className={`h-20 w-20 ${className}`}></Image>
            </motion.div>
            <motion.div className='py-8 font-light text-2xl tablet:text-xl'
                        variants={skillTransition(50, delay)}
                        whileInView='visible'
                        viewport={{ once: true}}
                        initial='hidden'
                        animate='animate'>
                {name}
            </motion.div>
        </div>

    )
}
const Skills = () => {
    return (
        <div className='px-10 flex flex-col font-rubik '>
            <AnimatedText text='Primary Skills' className='text-3xl pb-5 w-full text-left tablet:!text-2xl font-extrabold' />
            <div className='h-auto relative grid-cols-3 tablet:grid-cols-2 grid bg-gray-200 py-10 rounded-3xl shadow-2xl'>
                <Skill name='Next.js' image={NextImage} delay={0.2}></Skill>
                <Skill name='React' image={ReactImage} className='h-16 w-16' delay={0.2}></Skill>
                <Skill name='TypeScript' image={TSImage} delay={0.2}></Skill>
                <Skill name='Tailwind CSS' image={TailwindImage} className='h-16 w-16' delay={0.4}></Skill>
                <Skill name='PostgreSQL' image={PostgresImage} className='h-16 w-16' delay={0.4}></Skill>
                <Skill name='Vercel' image={VercelImage} className='h-14 w-16' delay={0.4}></Skill>
            </div>
        </div>
    )
}

export default Skills