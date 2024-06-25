import React from 'react';
import { motion } from 'framer-motion';

const quote = (delay) => {
    return {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 1,
            transition: {
                delay
            }
        }
    }
}

const singleWord= (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay
            }
        }
    }
}
const AnimatedText = ({text, className="" , delay= 0}) => {
    return(
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-5xl ${className}`}
            variants={quote}
            initial='initial'
            viewport={{ once: true }}
            whileInView='animate'
            >
                {
                    text.split(" ").map((word, index) =>
                    <motion.span key={word+ '-' + index} className='inline-block'
                    variants={singleWord(delay)}
                    initial='initial'
                    viewport={{ once: true }}
                    whileInView='animate'
                    >
                        {word}&nbsp;
                    </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText;