import React from 'react';
import Layout from "@/components/Layout";
import Link from "next/link";
import {GithubIcon, HandEmoji, LinkedInIcon} from "@/components/Icons";
import {motion} from "framer-motion";

const Footer = () => {
    return(
        <footer className='p-6 font-montHeavy flex justify-between items-center text-lightGrey bg-darkGrey w-full font-medium text-lg rounded-xl'>
            <div className='flex flex-col'>
                <h1 className='text-orange font-extrabold text-lg'>Lewis Saunders</h1>
                <span className='font-thin'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            </div>
            <div className='flex'>
                <motion.a href="https://linkedin.com/in/lewis-saunders" target={"_blank"}
                          whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon fill /></motion.a>
                <motion.a href="https://github.com/LS901" target={"_blank"}
                          whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon fill /></motion.a>
            </div>
        </footer>
    )
}

export default Footer;