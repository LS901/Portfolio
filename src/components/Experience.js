import React, {useRef} from 'react';
import { motion ,useScroll} from "framer-motion";
import LiIcon from "@/components/LiIcon";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";

const experienceTransition = (delay) => {
    return {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay
            }
        }
    }
}
const Details = ({position, company, companyLink, time, location, work, delay}) => {
    const ref = useRef(null);
    return (
    <motion.li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] tablet:w-full mx-auto flex flex-col items-center justify-between'
               variants={experienceTransition(delay)}
               whileInView='visible'
               viewport={{ once: true}}
               initial='hidden'>
        <LiIcon className="tablet:hidden"></LiIcon>
        <div>
            <h3 className='capitalize font-bold text-2xl tablet:text-xl'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className="text-emerald-700 capitalize font-extra-boldbold"
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75' >
                {time} | {location}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </motion.li>
    )
}
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
    })

    return (
    <div className='mt-32'>
        <AnimatedText text='Experience' className='font-bold text-5xl mt-0 py-20 w-full text-center mb-4 border-t-4 border-earthFive/50 tablet:!text-2xl' />
        <div ref={ref} className='w-[75%] laptop:w-full mx-auto relative'>
            <ul className= 'w-full flex flex-col items-start justify-between ml-4 tablet:ml-0'>
                <Details
                    delay={0}
                    position="Frontend Engineer"
                    company="ITV"
                    time="2022-Present"
                    location="London, UK"
                    companyLink="www.itvx.com"
                    work="Taking part in the development of responsive and user-friendly web applications, ensuring a
                         seamless user experience across these different applications working on ITVX Browser, ITVX
                         Connected TV & the ITV News website. Collaborating with UX/UI designers to translate design mockups and
                         wireframes into quality code."
                />
                <Details
                    delay={0.5}
                    position="Software Development Engineer in Test"
                    company="ITV"
                    time="2020-2022"
                    location="London, UK"
                    companyLink="www.itvx.com"
                    work="Oversee the QA process for Account Management on the ITV Hub.
                          Contributing to, and maintaining, automated testing frameworks for ITV web & mobile
                          applications, ensuring comprehensive coverage of functional and non-functional requirements. Ruby was the main tech used in this role."
                />
                <Details
                    delay={1}
                    position="Technology Graduate"
                    company="ITV"
                    time="2019-2020"
                    location="London, UK"
                    companyLink="www.itvx.com"
                    work="Rotate around a variety of different departments to obtain a deeper understanding of different
                          technology stacks and to understand the infrastructure of ITV, gaining context on how different
                          teams/departments work together."
                />
            </ul>
            <motion.p className='mt-24 p-5 text-center'
                      variants={experienceTransition(1.5)}
                      whileInView='visible'
                      viewport={{ once: true}}
                      initial='hidden'>For further details of my past experience, take a look at my&nbsp;
                <Link href="/CV.pdf" target={"_blank"} download={true}><strong className='hover:underline cursor-pointer' href="/CV.pdf">CV</strong></Link>
            </motion.p>
        </div>
    </div>
    )
}

export default Experience;