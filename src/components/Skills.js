import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TSImage from '../../public/images/skills/Typescript_2020.svg.png';
import TailwindImage from '../../public/images/skills/Tailwind.svg';
import PostgresImage from '../../public/images/skills/PostgreSQL.svg';
import NextImage from '../../public/images/skills/Next.jpg';
import ReactImage from '../../public/images/skills/React-icon.svg.png';
import VercelImage from '../../public/images/skills/Vercel.svg';
import AnimatedText from "@/components/AnimatedText";

const skills = [
    { name: 'Next.js', image: NextImage },
    { name: 'React', image: ReactImage },
    { name: 'TypeScript', image: TSImage },
    { name: 'Tailwind CSS', image: TailwindImage },
    { name: 'PostgreSQL', image: PostgresImage },
    { name: 'Vercel', image: VercelImage },
];

const Skill = ({name, image, index}) => (
    <motion.div
        className='group flex flex-col items-center justify-center gap-4 rounded-2xl bg-white border border-dark/5 px-4 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300'
        initial={{opacity: 0, y: 16}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.4, delay: index * 0.05}}
    >
        <div className='relative h-12 w-12 flex items-center justify-center'>
            <Image src={image} alt={`${name} logo`} className='h-full w-auto object-contain' />
        </div>
        <span className='font-rubik text-sm font-semibold text-dark text-center'>{name}</span>
    </motion.div>
);

const Skills = () => {
    return (
        <section className='w-full px-8 py-16 laptop:px-6 tablet:px-5 tablet:py-12'>
            <div className='mx-auto max-w-7xl'>
                <div className='mb-10 max-w-2xl'>
                    <p className='font-rubik text-xs font-semibold uppercase tracking-[0.3em] text-orange'>Tech Stack</p>
                    <AnimatedText text='Primary skills' className='!text-3xl !text-left !font-extrabold mt-2 tablet:!text-2xl' />
                    <p className='mt-3 font-montLight text-base leading-7 text-dark/70'>
                        The day-to-day tools I reach for when shipping production-ready web products.
                    </p>
                </div>
                <div className='grid grid-cols-6 gap-4 desktop:grid-cols-3 tablet:grid-cols-2'>
                    {skills.map((s, i) => (
                        <Skill key={s.name} name={s.name} image={s.image} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
