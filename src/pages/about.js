import React, {useEffect, useRef} from 'react';
import Head from "next/head";
import Image from 'next/image'
import profilePicture from '../../public/images/profile/about-me-image.png'
import { useInView, useMotionValue, useSpring } from "framer-motion";
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
        const unsubscribe = springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        });

        return () => unsubscribe();
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
                <meta name='description' content='Learn more about Lewis Saunders, his full-stack engineering experience, and the teams and products he has helped shape.'/>
            </Head>
            <Transition />
            <main className='flex w-full flex-col items-center justify-center'>
                <Banner heading={"A little more about me"} className='w-screen laptop:max-h-[300px] !h-[500px]'/>
                    <div className='grid w-full grid-cols-9 gap-16 py-12 px-16 desktop:grid-cols-1 desktop:items-center bg-lightGrey'>
                        <div className='laptop:py-4 col-span-6 flex flex-col items-start desktop:order-2 desktop:col-span-1'>
                            <div className='flex items-center'>
                                <h1 className='font-rubik py-5 font-extrabold tablet:text-2xl text-3xl mr-3'>Hi, I&apos;m Lewis</h1>
                                <Image src='/waving-hand-sign.svg' alt='Waving hand' width={40} height={40} />
                            </div>
                            <p className='font-montLight'>I&apos;m a full-stack engineer running a freelance technical consultancy, focused on building responsive, scalable, and beautifully designed digital products. With over five years of experience across media, insurance, and health technology, I&apos;ve developed a strong technical foundation to turn complex product goals into polished, production-ready applications.</p>
                            <p className='font-montLight my-4'>My core technical stack involves React, Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Vercel. I care deeply about modern web architecture—ensuring blazingly fast load times via React Server Components, clean API integrations with Next.js, and perfectly accessible user interfaces.</p>
                            <p className='font-montLight'>Currently, I partner directly with founders, agencies, and small businesses to deliver full-stack website creation, architectural audits, and embedded MVP development. If you need a dependable, communicative engineering partner to bring your vision online without the overhead of a full-time hire, I&apos;d love to help.</p>
                        </div>
                        <div className='mx-14 col-span-3 self-center flex h-max p-2 shadow-2xl desktop:hidden'>
                            <Image src={profilePicture} alt='Lewis Saunders' className='w-full h-auto rounded-xl desktop:order-1'></Image>
                        </div>
                    </div>
                <div className='w-full p-12 flex items-center justify-between bg-lightGrey'>
                    <div className='flex flex-col items-end justify-center desktop:items-center tablet:!justify-start'>
                                <span className='inline-block text-7xl font-bold tablet:!text-3xl desktop:text-5xl'>
                                    ~<AnimatedNumbers value={8} />M
                                </span>
                        <h2 className='text-xl font-medium text-dark/75 desktop:text-center desktop:text-medium tablet:!text-small'>Monthly users on ITV News</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center desktop:items-center desktop:self-start'>
                                <span className='inline-block text-7xl font-bold desktop:text-5xl tablet:!text-3xl'>
                                    <AnimatedNumbers value={5} />+
                                </span>
                        <h2 className='text-xl font-medium text-dark/75 desktop:text-center desktop:text-medium tablet:!text-small'>Years as a software engineer</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center desktop:items-center'>
                                <span className='inline-block text-7xl font-bold desktop:text-5xl tablet:!text-3xl'>
                                    <AnimatedNumbers value={3} />
                                </span>
                        <h2 className='text-xl font-medium text-dark/75 text-right desktop:text-center desktop:text-medium tablet:!text-small'>Industries worked across</h2>
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