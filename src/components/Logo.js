import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion'

const MotionLink = motion(Link)
const Logo = () => {
    return(
        <div className = 'flex items-center justify-center mt-1 laptop:-mt-1' >
            <MotionLink
                href="/"
                className='w-16 h-16 bg-earthOne text-light flex items-center justify-center rounded-full text-2xl font-bold border-r-dark'
                whileHover={{
                    scale: 1.1
                }}>LS</MotionLink>
        </div>
    )
}
export default Logo;