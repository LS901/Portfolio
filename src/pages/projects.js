import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from 'next/head';
import React, {useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import homepageRail from "../../public/images/projects/HomepageRails.png"
import regionalPlaceholder from "../../public/images/projects/RegionalPlaceholder.png"
import regionalRail from "../../public/images/projects/RegionalRail.png"
import regionGrid from "../../public/images/projects/RegionGrid.png"
import shortformPage from "../../public/images/projects/ShortformPage.png"
import ukElection from "../../public/images/projects/UKElectionStats.png"
import usaElection from "../../public/images/projects/USAElection.png"
import { motion } from 'framer-motion';
import Transition from "@/components/Transition";
const FeaturedProject = ({ title, summary, images, link, specificWork, techUsed, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return(
        <article
        className = 'w-full flex items-start relative rounded-br-2xl
        rounded-3xl border borer-solid border-dark bg-light shadow-2xl p-12 tablet:p-10 pt-16 pl-16 desktop:!flex-col'>
            <div className='w-1/2 desktop:w-full overflow-visible rounded-lg relative'>
                <div className='row-span-1 hidden desktop:flex justify-center text-center'>
                    <Link href={link} target="_blank" className='rounded-lg hover:underline underline-offset-4 '>
                        <h2 className='mb-4 w-full font-bold text-earthFive pl-2 py-2 text-xl'>{title}</h2>
                    </Link>
                </div>
                {images.map((img,index) => {
                    return index === 0 ? <Image src={img} alt={title} key={index} className={`w-full h-auto relative transition-opacity aspect-auto ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} />
                        : <Image src={img} alt={title} key={index} className={`w-100% desktop:top-[60px] top-0 absolute transition-opacity ${index === currentIndex ? 'opacity-100' : 'opacity-0'} ${className}`}  />
                })}
                <div className='text-center z-50'>
                    <button onClick={handlePrevious} disabled={currentIndex === 0}
                            className='m-10 tablet:m-6 cursor-pointer rounded-full px-5 border-dark/50 border hover:bg-earthThree
                         hover:text-light disabled:bg-[#CCCCCC] disabled:text-[#CCCCCC]'>
                        &lt;
                    </button>
                    <button onClick={handleNext} disabled={currentIndex === images.length - 1}
                            className='m-10 tablet:m-6 cursor-pointer rounded-full px-5 border-dark/50 border hover:bg-earthThree
                         hover:text-light disabled:bg-[#CCCCCC] disabled:text-[#CCCCCC]'>
                        &gt;
                    </button>
                </div>
            </div>

            <div className='w-1/2 desktop:w-full flex grid grid-rows-4 desktop:grid-rows-3 items-start justify-between pl-6'>
                <div className='row-span-1 desktop:hidden'>
                    <Link href={link} target="_blank" className='rounded-lg hover:underline underline-offset-4'>
                        <h2 className='mb-2 w-full text-left text-4xl font-bold text-earthFive pl-2 py-2 '>{title}</h2>
                    </Link>
                    <p className='mb-2 font-medium text-dark pl-2'>{summary}</p>
                </div>

                <div className='row-span-3 grid grid-cols-2 laptop:grid-cols-1'>
                    <div className='col-span-1 my-4 tablet:my-0 pr-6 pl-2 border-r-3 laptop:border-r-0 laptop:border-b-3 laptop:pb-6 border-dark/50'>
                        <h2 className='text-2xl pb-3 tablet:pb-7 tablet:text-xl'>Specific Work</h2>
                        <ul>
                            {specificWork.map((item) => <li key={item} className='tablet:text-small tablet:pb-2'><span className='pr-2 text-small'>&#x2023;</span>{item}</li>)}
                        </ul>
                    </div>
                    <div className='col-span-1 my-4 tablet:my-8 pl-8 pr-2 h-fit laptop:pl-2'>
                        <h2 className='text-2xl pb-3 tablet:pb-7 tablet:text-xl'>Tech Used</h2>
                        <ul>
                            {techUsed.map((item) => <li key={item}><span className='pr-2 text-small'>&#x21A6;</span>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}

const variant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 100, y: 0, transition: { duration: 0.5 }
    }
};
const projects = () => {

    const itvxTechs = ['JS','TS','React','Next', 'Webpack','HTML/CSS','Node','PNPM','Jest','Cypress', 'Figma', 'REST', 'GraphQL', 'Storybook', 'LaunchDarkly'];
    const itvNewsTechs = ['Same as above, plus...','Axios', 'Redis', 'Sass','Sitemap', 'Morgan', 'Contentful']

    return (
        <>
            <Head>
                <title>Lewis Saunders | Projects Page</title>
                <meta name="description" content="My projects and work"/>
            </Head>
            <Transition />
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16 laptop:p-8'>
                    <AnimatedText text="My Work at ITV" className='mb-16 tablet:text-2xl laptop:mb-8'/>

                    <div className='grid grid-cols-12 gap-12 tablet:gap-4 gap-y-32'>
                        <motion.div className='col-span-12'
                                    variants={variant}
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{once: true}}>
                            <FeaturedProject
                                title="ITVX Short Form"
                                images={[homepageRail, shortformPage]}
                                summary="The launch of ITVX also brought with it the launch of news/sport content on the app. Of which
                            I have been a substantial part of since launching."
                                specificWork={['Building & maintaining new functional components based around the short form pages',
                                    'Implementing shortform specific variants for components around the app such a tiles & sliders', '' +
                                    'Building of the News Category Page which is composed of hero, slider & tile components']}
                                link="https://www.itv.com/watch/news/man-appears-in-court-accused-of-alleged-holly-willoughby-kidnap-plot/3kx3vl3"
                                techUsed={itvxTechs}
                            />
                        </motion.div>
                        <motion.div className='col-span-12'
                                    variants={variant}
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{once: true}}>
                            <FeaturedProject
                                title="ITVX Regional News"
                                images={[regionalPlaceholder, regionGrid, regionalRail]}
                                summary="A recent feature in which we wanted to allow our users to be able to watch news content tied to a specific region.
                            I was a lead developer in this project."
                                link="https://www.itv.com/watch/categories/news"
                                specificWork={['Building a new slider component containing new tile variants that allows a user to select a region',
                                    'Building of the regional grid component, attached to the option for a user to sign in to allow location to be obtained from their profile', '' +
                                    'Implementation of the logic around the region select and the page dynamically rerendering accordingly. ' +
                                    'Implementation of the logic around either a users location being used from their profile, or a location being read from local storage if a region has already been selected.']}
                                techUsed={itvxTechs}
                            />
                        </motion.div>
                        <motion.div className='col-span-12'
                                    variants={variant}
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{once: true}}>
                            <FeaturedProject
                                title="ITVX Future Events"
                                images={[ukElection, usaElection]}
                                summary="A current project in which we are setting up a temporary seat counter for the UK election in July. And a new portrait
                                tile slider on ITVX browser/CTV for event based news (e.g when the USA election will take place)."
                                link="https://www.itv.com/news"
                                specificWork={['Building a new portrait tile/slider hero component for the news category page for event based news',
                                    'Implement the back end logic for filtering results returned from the query, the filtering depends on whether the event based slider or default slider should render.', '' +
                                    'Building of the UK Election 2024 banner which dynamically updates the seats value for each party, ready for the July election. This includes back-end, API & post data processing logic.']}
                                techUsed={itvNewsTechs}
                            />
                        </motion.div>
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default projects;