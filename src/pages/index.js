import Head from 'next/head'
import Link from "next/link";
import {motion} from "framer-motion";
import Transition from "@/components/Transition";
import Skills from "@/components/Skills";
import React from "react";
import GetInTouch from "@/components/GetInTouch";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import PostLaunchSupport from "@/components/PostLaunchSupport";

const MotionLink = motion(Link)

const variant = {
    hidden: { opacity: 0, y:-50 },
    visible: { opacity: 1, y:0, transition: { duration: 0.5 }
    }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Lewis Saunders | Portfolio</title>
    <meta name="description" content="Full-stack engineer portfolio for Lewis Saunders, featuring React, Next.js, and PostgreSQL architectures. Offering full-stack website creation, MVP development, and contract support." />
      </Head>
        <Transition></Transition>
        <main className='flex flex-col items-center text-dark w-full min-h-screen'>
        <Banner heading="Hi, I'm Lewis." body="a full-stack engineer specialising in Next.js and React." className='w-screen laptop:max-h-[450px]'/>
                <div className='bg-lightGrey'>
                    <div className='py-16 tablet:py-8 px-12 tablet:px-6 flex flex-col'>
                        <p className='font-light w-2/3 laptop:w-full leading-7'>
                        I help small businesses, startups, and product teams ship modern websites and front-end experiences with a focus on clean UI, performance, accessibility, and reliable delivery.
                        </p>
                        <p className='font-light w-2/3 laptop:w-full leading-7 my-4'>
            My background includes large-scale customer-facing products at ITV, Hastings Direct, and Health Data Research UK, where I&apos;ve delivered production-ready features under tight deadlines using React, Next.js, TypeScript, and modern frontend tooling.
                        </p>
                        <p className='font-light w-2/3 laptop:w-full leading-7'>
                        I&apos;m now starting to take on selected freelance projects, contract front-end support, and ongoing retainer work for teams that need senior-level implementation without the overhead of a full-time hire.
                        </p>
                        <MotionLink href="mailto:lewissaunders.dev@gmail.com"
                                    className='font-extrabold rounded-3xl py-6 text-white tablet:w-full w-1/3 bg-orange h-2 my-8 flex items-center justify-center'
                                    whileHover={{scale: 1.05}}
                        >Get in Touch</MotionLink>
                    </div>
          <Services />
          <Pricing />
          <PostLaunchSupport />
                    <div className='grid grid-cols-2 laptop:grid-cols-1 px-12 tablet:px-6 gap-8 mb-24 laptop:mb-12'>
                        <motion.div
                            variants={variant}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='shadow-2xl flex flex-col items-start justify-end h-[600px] bg-background bg-center rounded-xl p-8'>
                            <h1 className='font-extrabold text-lightGrey text-4xl text-left laptop:!text-3xl'>Projects</h1>
                            <p className='pt-3 font-thin text-lightGrey text-xl text-left laptop:!text-2xl'>A selection of professional product work and personal builds that reflect how I approach front-end engineering.</p>
                            <MotionLink href="/projects"
                                        className='font-extrabold rounded-3xl py-6 text-white tablet:w-full w-1/3 bg-orange h-2 my-6 flex items-center justify-center'
                                        whileHover={{scale: 1.05}}
                            >View Projects</MotionLink>
                        </motion.div>
                        <motion.div
                            variants={variant}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='shadow-2xl flex flex-col items-start justify-end h-[600px] bg-background bg-center rounded-xl p-8'>
                            <h1 className='font-extrabold text-lightGrey text-4xl text-left laptop:!text-3xl'>About</h1>
                            <p className='pt-3 font-thin text-lightGrey text-xl text-left laptop:!text-2xl'>More about my background, experience, and the feedback I&apos;ve received from people I&apos;ve worked with.</p>
                            <MotionLink href="/about"
                                        className='font-extrabold rounded-3xl py-6 text-white tablet:w-full w-1/3 bg-orange h-2 my-6 flex items-center justify-center'
                                        whileHover={{scale: 1.05}}
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
