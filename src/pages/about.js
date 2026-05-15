import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import profilePicture from '../../public/images/profile/about-me-image.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Experience from '@/components/Experience';
import Recommendations from '@/components/Recommendations';
import Transition from '@/components/Transition';
import GetInTouch from '@/components/GetInTouch';
import PageHero from '@/components/PageHero';
import Card from '@/components/ui/Card';

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 5000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) motionValue.set(value);
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
        return () => unsubscribe();
    }, [springValue, value]);

    return <span ref={ref}>0</span>;
};

const stats = [
    { prefix: '~', value: 8, suffix: 'M', label: 'Monthly users on ITV News' },
    { prefix: '', value: 5, suffix: '+', label: 'Years as a software engineer' },
    { prefix: '', value: 3, suffix: '', label: 'Industries worked across' }
];

const About = () => {
    return (
        <>
            <Head>
                <title>About | Lewis Saunders</title>
                <meta name='description' content='Learn more about Lewis Saunders, his full-stack engineering experience, and the teams and products he has helped shape.' />
            </Head>
            <Transition />
            <main className='flex w-full flex-col items-center bg-light text-dark'>
                <PageHero
                    eyebrow='About'
                    title={<>Hi, I&rsquo;m Lewis</>}
                    description={<>Full-stack engineer running a freelance technical consultancy &mdash; building responsive, scalable, and beautifully designed digital products with React, Next.js, TypeScript, and PostgreSQL.</>}
                />

                {/* Bio */}
                <section className='w-full px-8 pt-16 pb-12 laptop:px-6 tablet:px-5 tablet:pt-12'>
                    <div className='mx-auto grid max-w-6xl grid-cols-12 gap-12 desktop:grid-cols-1 desktop:gap-8'>
                        <div className='col-span-7 desktop:col-span-1 flex flex-col justify-center'>
                            <div className='space-y-4 font-montLight text-base leading-7 text-dark/80'>
                                <p>I&apos;ve spent the last five-plus years across media, insurance, and health technology, turning complex product goals into polished, production-ready applications.</p>
                                <p>My core technical stack involves React, Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Vercel. I care deeply about modern web architecture &mdash; ensuring blazingly fast load times via React Server Components, clean API integrations with Next.js, and accessible user interfaces.</p>
                                <p>I currently partner with founders, agencies, and small businesses to deliver full-stack website creation, architectural audits, and embedded MVP development.</p>
                            </div>
                        </div>
                        <div className='col-span-5 desktop:col-span-1'>
                            <div
                                className='relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-dark/5'
                                style={{ width: '100%', maxWidth: '320px', marginLeft: 'auto', marginRight: 'auto' }}
                            >
                                <Image src={profilePicture} alt='Lewis Saunders' className='h-auto w-full' priority />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className='w-full px-8 py-10 laptop:px-6 tablet:px-5'>
                    <div className='mx-auto grid max-w-6xl grid-cols-3 gap-6 tablet:grid-cols-1'>
                        {stats.map((s) => (
                            <Card key={s.label} tone='light' padding='lg'>
                                <p className='font-rubik text-5xl font-extrabold text-dark tablet:text-4xl'>
                                    {s.prefix}<AnimatedNumbers value={s.value} />{s.suffix}
                                </p>
                                <p className='mt-2 font-montLight text-sm text-dark/65'>{s.label}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <Recommendations />
                <Experience />
                <GetInTouch />
            </main>
        </>
    );
};

export default About;
