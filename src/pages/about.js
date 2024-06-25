import React, {useEffect, useRef} from 'react';
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from 'next/image'
import profilePicture from '../../public/images/profile/about-me-image.png'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Recommendations from "@/components/Recommendations";
import Transition from "@/components/Transition";

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{ duration: 5000 });
    const isInView = useInView(ref, {once:true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue, value])

    return (
        <span ref={ref}></span>
    )
}
const about = () => {
    return (
        <>
            <Head>
                <title>Lewis Saunders | About Me</title>
                <meta name='description' content='information about Lewis Saunders'/>
            </Head>
            <Transition />
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16 tablet:!p-14'>
                    <AnimatedText text='A little more about me... ' className=' mb-16 tablet:!text-xl' />
                    <div className='grid w-full grid-cols-9 gap-16 desktop:grid-cols-1 desktop:items-center'>
                        <div className='col-span-3 flex flex-col items-start desktop:order-2 desktop:col-span-1'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-earthTwo'>Biography</h2>
                            <p className='font-medium'>Hi, I&apos;m Lewis, a Frontend Engineer for ITV: One of the UK&apos;s biggest broadcasters. Specfically working within the News team. With a passion for creating highly responsive, functional,
                                and user-centered digital experiences, I&apos;m looking to work for <span className='font-extra-bold'>you</span> and be your next front end engineer. With 4.5 years of experience in the technology field,
                                I am confident in my career path as an engineer, and I am also always looking for ways to develop, learn and grow.</p>
                            <p className='font-medium my-4'>I believe that user experience, performance and aesthetic all lie at the core of front end engineering. I ensure that I keep a user-focused approach in my work
                            at all times. I also make sure to always follow strict coding conventions which lead to highly optimal & readable codebasess. </p>
                            <p className='font-medium'>Whether I am working on a the ITV news website, ITVX or subsequent mobile applications, I bring my dedication to front end engineering and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        </div>
                        <div className='col-span-3 relative h-max
                        bg-earthOne p-2 shadow-2xl desktop:w-1/2 desktop:col-span-1 desktop:left-[25%] tablet:w-fit'>
                            <Image src={profilePicture} alt='Lewis Saunders' className='w-full h-auto desktop:order-1 '></Image>
                        </div>

                        <div className='col-span-3 flex flex-col items-end justify-between desktop:order-3 desktop:col-span-1 desktop:flex-row'>
                            <div className='flex flex-col items-end justify-center desktop:items-center tablet:!justify-start'>
                                <span className='inline-block text-7xl font-bold tablet:!text-3xl desktop:text-5xl'>
                                    ~<AnimatedNumbers value={8} />M
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 desktop:text-center desktop:text-medium tablet:!text-small'>Monthly Active Users for the ITV News Site</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center desktop:items-center desktop:self-start'>
                                <span className='inline-block text-7xl font-bold desktop:text-5xl tablet:!text-3xl'>
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 desktop:text-center desktop:text-medium tablet:!text-small'>Years of Experience</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center desktop:items-center'>
                                <span className='inline-block text-7xl font-bold desktop:text-5xl tablet:!text-3xl'>
                                    ~<AnimatedNumbers value={250} />K
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 text-right desktop:text-center desktop:text-medium tablet:!text-small'>Monthly Active Users for ITVX News Streams</h2>
                            </div>
                        </div>
                    </div>

                <Recommendations />
                <Skills />
                <Experience />
                </Layout>
            </main>
        </>
    )
}

export default about