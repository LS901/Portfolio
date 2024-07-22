import Head from 'next/head'
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {motion} from "framer-motion";
import {LinkArrow} from "@/components/Icons";
import Transition from "@/components/Transition";
import Skills from "@/components/Skills";
import React from "react";
import GetInTouch from "@/components/GetInTouch";
import Banner from "@/components/Banner";

const MotionLink = motion(Link)

const variant = {
    hidden: { opacity: 0, y:-50 },
    visible: { opacity: 100, y:0, transition: { duration: 0.5 }
    }
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Lewis Saunders | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
        <Transition></Transition>
        <main className='flex flex-col items-center text-dark w-full min-h-screen'>
                <Banner heading="Hi, I'm Lewis" body="a passionate and driven front end engineer." className='w-screen laptop:max-h-[450px]'/>
                <div className='bg-lightGrey'>
                    <div className='py-24 px-12 flex flex-col'>
                        <p className='font-light w-2/3 laptop:w-full leading-7'>
                            Experienced Front End Engineer with a strong proficiency in modern front end technologies. Focused on JavaScript, React.js,
                            Next.js and TypeScript. Experienced with all Agile development methodologies such as Kanban, Scrum and Scrumban. Highly
                            driven, motivated and quick to pick up new technologies, with a proven track record developing visible front-end services to strict
                            deadlines.
                        </p>
                        <MotionLink href="CV.pdf" target={"_blank"}
                                    className='font-extrabold rounded-3xl py-6 text-white tablet:w-full w-1/3 bg-orange h-2 my-8 flex items-center justify-center'
                                    whileHover={{scale: 1.1}}
                                    download={true}
                        >Download CV</MotionLink>
                    </div>
                    <div className='grid grid-cols-2 laptop:grid-cols-1 px-12'>
                        <motion.div
                            variants={variant}
                            initial='hidden'
                            whileInView='visible'
                            className='shadow-2xl flex flex-col items-start justify-end col-span-1 laptop:mr-0 mr-8 laptop:mb-12 mb-24 h-[600px] bg-background bg-center rounded-xl p-8'>
                            <h1 className='font-extrabold text-lightGrey text-4xl text-left laptop:!text-3xl'>Projects</h1>
                            <p className='pt-3 font-thin text-lightGrey text-xl text-left laptop:!text-2xl'>A collection of my personal projects and work I have done whilst at ITV</p>
                            <MotionLink href="/projects"
                                        className='font-extrabold rounded-3xl py-6 text-white tablet:w-full w-1/3 bg-orange h-2 my-6 flex items-center justify-center'
                                        whileHover={{scale: 1.1}}
                            >View Projects</MotionLink>
                        </motion.div>
                        <motion.div
                            variants={variant}
                            initial='hidden'
                            whileInView='visible'
                            className='shadow-2xl flex flex-col items-start justify-end col-span-1 laptop:ml-0 ml-8 laptop:mb-12 mb-24 h-[600px] bg-background bg-center rounded-xl p-8'>
                            <h1 className='font-extrabold text-lightGrey text-4xl text-left laptop:!text-3xl'>About</h1>
                            <p className='pt-3 font-thin text-lightGrey text-xl text-left laptop:!text-2xl'>Learn a little bit more about me, including my previous experience and recommendations from colleagues</p>
                            <MotionLink href="/about"
                                        className='font-extrabold rounded-3xl py-6 text-white tablet:w-full w-1/3 bg-orange h-2 my-6 flex items-center justify-center'
                                        whileHover={{scale: 1.1}}
                            >Learn More</MotionLink>
                        </motion.div>
                    </div>
                    <Skills />
                    <GetInTouch />
                </div>
        </main>
    </>
  )
}
