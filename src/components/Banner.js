import React from 'react';
import {motion} from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

const Banner = ({heading, body, className}) => {
    return (
        <div className={`${className} font-rubik flex justify-start w-full h-[800px]`}>
            <motion.div className='w-2/3 laptop:w-fit pl-6 flex flex-col self-end p-8 ml-12 mb-8 rounded-lg tablet:!align-bottom'
                        initial={{opacity:0}}
                        animate={{opacity:1, transition: { duration: 1 }}}>
                <AnimatedText text={heading} className='font-extrabold text-lightGrey !text-7xl tablet:!text-5xl !text-left ' delay={0.5}/>
                <p className='self-start font-extrabold text-lightGrey text-7xl tablet:!text-5xl'>{body}</p>
            </motion.div>
        </div>
    );
};

export default Banner;
