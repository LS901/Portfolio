import React, {useRef} from 'react';
import { motion, inView } from 'framer-motion'
import TSImage from '../../public/images/skills/Typescript_2020.svg.png';
import HTMLImage from '../../public/images/skills/HTML.png';
import CSSImage from '../../public/images/skills/CSS.png';
import NextImage from '../../public/images/skills/Next.jpg';
import ReactImage from '../../public/images/skills/React-icon.svg.png';
import JSImage from '../../public/images/skills/JavaScript-logo.png';
import RubyImage from '../../public/images/skills/Ruby.png';
import SQLImage from '../../public/images/skills/SQL5.png';

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

const skillTitle = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transitions: { duration: 1 } }
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
        <div className='px-10 flex flex-col font-rubik'>
            <AnimatedText text='Primary Skills' className='text-3xl pb-5 w-full text-left tablet:!text-xl font-extrabold' />
            <div className='h-auto relative grid-cols-4 tablet:grid-cols-2 grid bg-gray-200 py-10 rounded-3xl shadow-2xl'>
                <Skill name='CSS' image={CSSImage} className='h-16' delay={0}></Skill>
                <Skill name='HTML' image={HTMLImage} className='h-16 w-16' delay={0.2}></Skill>
                <Skill name='JavaScript' image={JSImage} delay={0.4}></Skill>
                <Skill name='React.JS' image={ReactImage} className='h-16 w-24' delay={0.6}></Skill>
                <Skill name='Next.JS' image={NextImage} delay={0.8}></Skill>
                <Skill name='TypeScript' image={TSImage}  delay={1.0}></Skill>
                <Skill name='Ruby' image={RubyImage}  delay={1.2}></Skill>
                <Skill name='SQL' image={SQLImage}  delay={1.4}></Skill>
            </div>
        </div>
    )
}

export default Skills