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
        className = {`w-full flex flex-col items-center flex bg-light/90 shadow-2xl p-12 tablet:p-10 pt-16`}>
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
                        {responsive === 'Yes' && <p className='font-rubik mb-4 font-medium text-dark'><em>Responsive build</em></p>}
                        <div className='flex flex-wrap font-light text-orange'>
                            {skills.map((e,index) => (
                                <React.Fragment key={`${title}-${e}`}>
                                    <span className='pr-4'>{e}</span>
                                    {skills.length - 1 !== index && (
                                        <span className='!pr-4'>|</span>
                                    )}
                                </React.Fragment>
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
    const [activeProjectPage, setActiveProjectPage] = useState('professional');
    const changeProjectType = (type) => {
        setActiveProjectPage(type);
    }

    return (
        <>
            <Head>
                <title>Lewis Saunders | Projects Page</title>
                <meta name="description" content="Selected full-stack and front-end projects by Lewis Saunders, covering production product work, Next.js architecture, and freelance MVP development."/>
            </Head>
            <Transition />
            <main className='font-montLight w-full flex flex-col items-center justify-center'>
                    <Banner heading={"Projects"} className='w-screen laptop:max-h-[300px] !h-[500px]'/>
                    <div className='w-full bg-lightGrey px-12 tablet:px-6 py-12 tablet:py-8'>
                        <p className='max-w-4xl font-light text-lg leading-8'>This selection of work spans heavily trafficked public applications to independent MVPs. Whether you are hiring me for full-scale website creation, performance auditing, or headless CMS implementations, these case studies demonstrate the robust Next.js and React architecture I bring to all client work.</p>
                    </div>
                    <ProjectType projectPage={activeProjectPage} changeProjectType={changeProjectType}/>
                    <div className='flex flex-col w-full'>
                        {activeProjectPage === 'professional' ? (
                            itvData.map((p,index) => (
                                <motion.div className='col-span-4'
                                            key={p.title}
                                            >
                                    <FeaturedProject
                                        title={p.title}
                                        image={p.mainImage}
                                        summary={p.tagLine}
                                        uiLink={p.uiLink}
                                        skills={p.primaryTechsUsed}
                                        index={index}
                                    />
                                </motion.div>
                            ))) : (
                            personalData.map((p,index) => (
                                <motion.div className='col-span-4'
                                            key={p.title}
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