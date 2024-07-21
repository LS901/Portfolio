import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
const MotionLink = motion(Link)

const GetInTouch = () => {
    return (
        <div className='rounded-xl flex flex-col items-center justify-center mx-10 p-20 font-montHeavy text-lightGrey my-32 bg-darkGrey shadow-2xl'>
            <p className='font-extralight text-4xl pb-2'>Like what you&apos;ve seen?</p>
            <p className='font-extrabold text-5xl'>I'd love to have a chat</p>
            <MotionLink href="mailto:lewissaunders100@gmail.com" target={'_blank'}
                        className='font-extrabold rounded-3xl py-5 text-white w-1/3 bg-orange h-2 mt-6 flex items-center justify-center'
                        whileHover={{scale: 1.1}}
            >Get in Touch</MotionLink>
        </div>
    );
};

export default GetInTouch;
