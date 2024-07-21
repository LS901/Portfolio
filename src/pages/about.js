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
import Banner from "@/components/Banner";
import GetInTouch from "@/components/GetInTouch";

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
                <Banner heading={"A little more about me"} className='w-screen laptop:max-h-[300px] !h-[500px]'/>
                    <div className='grid w-full grid-cols-9 gap-16 desktop:grid-cols-1 desktop:items-center bg-lightGrey'>
                        <div className='laptop:py-10 p-20 col-span-6 flex flex-col items-start desktop:order-2 desktop:col-span-1'>
                            <h1 className='font-rubik py-10 font-extrabold tablet:text-2xl text-3xl'>Hi, I&apos;m Lewis, a Frontend Engineer for ITV: One of the UK&apos;s biggest broadcasters</h1>
                            <h2 className='font-rubik pb-10 text-2xl font-bold text-darkGrey'>Biography</h2>
                            <p className='font-montLight'>Specifically working within the News team. With a passion for creating highly responsive, functional,
                                and user-centered digital experiences, I&apos;m looking to work for <span className='font-extra-bold'>you</span> and be your next front end engineer. With 4.5 years of experience in the technology field,
                                I am confident in my career path as an engineer, and I am also always looking for ways to develop, learn and grow.</p>
                            <p className='font-montLight my-4'>I believe that user experience, performance and aesthetic all lie at the core of front end engineering. I ensure that I keep a user-focused approach in my work
                            at all times. I also make sure to always follow strict coding conventions which lead to highly optimal & readable codebasess. </p>
                            <p className='font-montLight'>Whether I am working on a the ITV news website, ITVX or subsequent mobile applications, I bring my dedication to front end engineering and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        </div>
                        <div className='mx-14 col-span-3 self-center flex h-max p-2 shadow-2xl desktop:hidden'>
                            <Image src={profilePicture} alt='Lewis Saunders' className='w-full h-auto desktop:order-1 '></Image>
                        </div>
                    </div>
                <Recommendations />
                <Experience />
                <div className='bg-lightGrey w-full'>
                    <GetInTouch />
                </div>
            </main>
        </>
    )
}

export default about