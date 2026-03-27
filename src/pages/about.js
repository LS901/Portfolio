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
                <meta name='description' content='Learn more about Lewis Saunders, his front-end engineering experience, and the teams and products he has helped shape.'/>
            </Head>
            <Transition />
            <main className='flex w-full flex-col items-center justify-center'>
                <Banner heading={"A little more about me"} className='w-screen laptop:max-h-[300px] !h-[500px]'/>
                    <div className='grid w-full grid-cols-9 gap-16 desktop:grid-cols-1 desktop:items-center bg-lightGrey'>
                        <div className='laptop:py-4 p-20 px-16 col-span-6 flex flex-col items-start desktop:order-2 desktop:col-span-1'>
                            <div className='flex items-center'>
                                <h1 className='font-rubik py-5 font-extrabold tablet:text-2xl text-3xl mr-3'>Hi, I&apos;m Lewis</h1>
                                <Image src='/waving-hand-sign.svg' alt='Waving hand' width={40} height={40} />
                            </div>
                            <p className='font-montLight'>I&apos;m a front-end engineer focused on building responsive, reliable, and user-centred digital experiences. With more than five years of experience across media, insurance, and health technology, I&apos;ve developed a strong foundation in turning product goals into polished, production-ready interfaces.</p>
                            <p className='font-montLight my-4'>I care deeply about user experience, performance, accessibility, and clean implementation. My approach is practical and detail-oriented: build reusable solutions, keep code readable, and make sure the end result works well for both users and the teams maintaining it.</p>
                            <p className='font-montLight'>Whether I&apos;m creating reusable components, integrating APIs, or translating designs into live products, I bring a user-focused mindset and a consistent engineering standard to every project. I&apos;m always looking to keep improving and to contribute to teams building thoughtful digital products.</p>
                        </div>
                        <div className='mx-14 col-span-3 self-end flex h-max p-2 shadow-2xl desktop:hidden'>
                            <Image src={profilePicture} alt='Lewis Saunders' className='self-bottom w-full h-auto desktop:order-1 '></Image>
                        </div>
                    </div>
                <div className='w-full p-20 flex items-center justify-between bg-lightGrey'>
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
                        <h2 className='text-xl font-medium text-dark/75 desktop:text-center desktop:text-medium tablet:!text-small'>Years in front-end engineering</h2>
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