import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Transition from "@/components/Transition";
import Skills from "@/components/Skills";
import GetInTouch from "@/components/GetInTouch";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import PostLaunchSupport from "@/components/PostLaunchSupport";
import Button from "@/components/ui/Button";

const heroStats = [
    { value: '~8M', label: 'Monthly users on ITV News' },
    { value: '5+', label: 'Years as a software engineer' },
    { value: '3', label: 'Industries worked across' },
];

export default function Home() {
    return (
        <>
            <Head>
                <title>Lewis Saunders | Full-stack Engineer</title>
                <meta name="description" content="Lewis Saunders is a full-stack engineer building modern websites, MVPs, and front-end experiences with Next.js, React, TypeScript, and PostgreSQL." />
            </Head>
            <Transition />
            <main className='flex flex-col items-center text-dark w-full'>
                {/* Hero */}
                <section
                    className='relative w-full overflow-hidden bg-darkGrey px-8 pt-20 pb-24 text-light laptop:px-6 laptop:pt-16 laptop:pb-20 tablet:px-5 tablet:pt-12 tablet:pb-14'
                    style={{
                        backgroundImage:
                            "linear-gradient(120deg, rgba(4,30,43,0.92) 0%, rgba(4,30,43,0.78) 55%, rgba(4,30,43,0.55) 100%), url('/images/background.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center right'
                    }}
                >
                    <div className='mx-auto max-w-6xl'>
                        <motion.p
                            initial={{opacity: 0, y: 8}} animate={{opacity: 1, y: 0}} transition={{duration: 0.4}}
                            className='font-rubik text-xs font-semibold uppercase tracking-[0.3em] text-orange'
                        >Available for freelance &amp; contract work</motion.p>

                        <motion.h1
                            initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.05}}
                            className='font-rubik mt-5 max-w-4xl text-6xl font-extrabold leading-[1.05] tracking-tight text-light laptop:text-5xl tablet:text-[2rem] tablet:leading-tight'
                        >
                            Hi, I&apos;m Lewis &mdash;<br className='tablet:hidden' />
                            <span className='text-orange'> a full-stack engineer</span> shipping modern web products.
                        </motion.h1>

                        <motion.p
                            initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.12}}
                            className='font-montLight mt-7 max-w-2xl text-lg leading-8 text-light/80 tablet:mt-5 tablet:text-sm tablet:leading-7'
                        >
                            I help small businesses, startups, and product teams ship modern websites and front-end experiences with a focus on clean UI, performance, accessibility, and reliable delivery. Background includes large-scale customer-facing products at ITV, Hastings Direct, and Health Data Research UK.
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.18}}
                            className='mt-9 flex flex-wrap gap-4'
                        >
                            <Button href="/projects" variant="primary" size="lg">View projects</Button>
                            <Button href="mailto:lewissaunders.dev@gmail.com" variant="outline" size="lg" external>Get in touch</Button>
                        </motion.div>

                        <motion.dl
                            initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.24}}
                            className='mt-14 grid grid-cols-3 gap-8 border-t border-light/15 pt-8 tablet:mt-10 tablet:grid-cols-3 tablet:gap-4 tablet:pt-6'
                        >
                            {heroStats.map((s) => (
                                <div key={s.label}>
                                    <dt className='sr-only'>{s.label}</dt>
                                    <dd className='font-rubik text-3xl font-extrabold text-light tablet:text-2xl'>{s.value}</dd>
                                    <p className='font-montLight text-sm text-light/70 mt-1 tablet:text-xs'>{s.label}</p>
                                </div>
                            ))}
                        </motion.dl>
                    </div>
                </section>

                <Services />
                <Pricing />
                <PostLaunchSupport />
                <Skills />
                <GetInTouch />
            </main>
        </>
    );
}
