import Head from 'next/head';
import React, {useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Transition from "@/components/Transition";
import Banner from "@/components/Banner";
import ProjectType from "@/components/ProjectType";
import itvData from '../metadata/itv-project-data.json'
import personalData from '../metadata/personal-project-data.json'

const MotionLink = motion(Link);
const FeaturedProject = ({ title, summary, image, skills, index, uiLink, gitLink, responsive, isPersonal = false }) => {
    return(
        <article
        className = {`w-full flex flex-col laptop:items-center ${index % 2 === 0 ? 'items-start' : 'items-end'} flex bg-light/80 shadow-2xl p-12 tablet:p-10 pt-16`}>
            <motion.div
                variants={variant}
                initial='hidden'
                whileInView='visible'
            >
                <Image width={0} height={0} sizes="100vw" src={`${image}`} alt={title} className={`w-[100%] h-auto transition-opacity aspect-auto shadow-2xl rounded-lg`} />
                <div className=''>
                    <div className='row-span-1'>
                        <h2 className='font-rubik my-5 w-full text-left text-4xl font-extrabold py-2 '>{title}</h2>
                        <p className='font-rubik mb-4 font-medium text-dark'>{summary}</p>
                        <p className='font-rubik mb-4 font-medium text-dark'><em>Responsive? {responsive}</em></p>
                        <div className='flex flex-wrap font-light text-orange'>
                            {skills.map((e,index) => (
                                <>
                                    <span className='pr-4' key={e.uid}>{e}</span>
                                    {skills.length - 1 !== index && (
                                        <span className='!pr-4'>|</span>
                                    )}
                                </>
                            ))}
                        </div>
                        <div className='flex'>
                            <MotionLink href={uiLink} target={"_blank"}
                                        className='font-extrabold rounded-3xl py-6 mr-6 text-white w-[150px] bg-orange h-2 my-8 flex items-center justify-center'
                                        whileHover={{scale: 1.1}}
                            >UI</MotionLink>
                            {isPersonal && (
                            <MotionLink href={gitLink} target={"_blank"}
                                       className='font-extrabold rounded-3xl py-6 text-white w-[150px] bg-orange h-2 my-8 flex items-center justify-center'
                                       whileHover={{scale: 1.1}}
                            >Code</MotionLink>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

        </article>
    )
}

const variant = {
    hidden: { opacity: 0, y:0 },
    visible: { opacity: 100, y:0, transition: { duration: 0.5 }
    }
};
const Projects = () => {
    const [activeProjectPage, setActiveProjectPage] = useState('personal');
    const changeProjectType = (type) => {
        setActiveProjectPage(type);
    }

    return (
        <>
            <Head>
                <title>Lewis Saunders | Projects Page</title>
                <meta name="description" content="My projects and work"/>
            </Head>
            <Transition />
            <main className='font-montLight w-full flex flex-col items-center justify-center'>
                    <Banner heading={"Projects"} className='w-screen laptop:max-h-[300px] !h-[500px]'/>
                    <ProjectType projectPage={activeProjectPage} changeProjectType={changeProjectType}/>
                    <div className='flex flex-col w-full'>
                        {activeProjectPage === 'ITV' ? (
                            itvData.map((p,index) => (
                                <motion.div className='col-span-4'
                                            key={p.uid}
                                            >
                                    <FeaturedProject
                                        title={p.title}
                                        image={p.mainImage}
                                        summary={p.tagLine}
                                        uiLink={p.uiLink}
                                        skills={p.primaryTechsUsed}
                                        index={index}
                                        responsive={p.responsive}
                                    />
                                </motion.div>
                            ))) : (
                            personalData.map((p,index) => (
                                <motion.div className='col-span-4'
                                            key={p.uid}
                                            >
                                    <FeaturedProject
                                        title={p.title}
                                        image={p.mainImage}
                                        summary={p.tagLine}
                                        uiLink={p.uiLink}
                                        gitLink={p.gitLink}
                                        skills={p.primaryTechsUsed}
                                        index={index}
                                        isPersonal
                                        responsive={p.responsive}
                                    />
                                </motion.div>
                        )))
                    }
                    </div>
            </main>
        </>
    );
}

export default Projects;