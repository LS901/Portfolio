import React, {useState} from 'react'
import Link from "next/link";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import { LinkedInIcon, GithubIcon, YoutubeIcon } from "@/components/Icons";
import { motion } from 'framer-motion';

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
        <span className={`h-[2px] inline-block w-0 bg-earthTwo
        absolute left-0 -bottom-0.5 group-hover:w-full 
        transition-[width] ease duration-200 
        ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return(
        <button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[2px] inline-block w-0 bg-light
        absolute left-0 -bottom-0.5 group-hover:w-full 
        transition-[width] ease duration-200 
        ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    )
}
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="w-full px-32 laptop:px-8 py-8 font-medium flex items-center justify-between border-b-2 border-dark/30 bg-earthFive bg-opacity-70 relative">
            <button className='flex flex-col justify-center items-center hidden laptop:flex' onClick={handleClick}>
                <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center laptop:hidden ' >
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4'/>
                    <CustomLink href="/about" title="About" className='mx-4'/>
                    <CustomLink href="/projects" title="Projects" className='mx-4'/>
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://linkedin.com/in/lewis-saunders" target={"_blank"}
                              whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mr-3'><LinkedInIcon /></motion.a>
                    <motion.a href="https://github.com/LS901" target={"_blank"}
                              whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon /></motion.a>
                    <motion.a href="https://www.youtube.com/@lewz1" target={"_blank"}
                              whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'><YoutubeIcon /></motion.a>
                </nav>
            </div>

            {isOpen ?
            <motion.div
                initial={{scale: 0, opacity:0, x: "-50%", y: "-50%"}}
                animate={{scale: 1, opacity:1}}
                className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
            bg-dark/90 rounded-lg backdrop-blur-md py-32' >
                <nav className='flex items-center flex-col justify-center'>
                    <CustomMobileLink href="/" title="Home" toggle={handleClick}/>
                    <CustomMobileLink href="/about" title="About" toggle={handleClick}/>
                    <CustomMobileLink href="/projects" title="Projects" toggle={handleClick}/>
                </nav>
                <nav className='flex items-center justify-center flex-wrap mt-2'>
                    <motion.a href="https://linkedin.com/in/lewis-saunders" target={"_blank"}
                              whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mr-3 laptop:mx-1'><LinkedInIcon /></motion.a>
                    <motion.a href="https://github.com/LS901" target={"_blank"}
                              whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 rounded-full laptop:mx-1'><GithubIcon /></motion.a>
                    <motion.a href="https://www.youtube.com/@lewz1" target={"_blank"}
                              whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3 rounded-full laptop:mx-1'><YoutubeIcon /></motion.a>
                </nav>
            </motion.div> : null }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo></Logo>
            </div>
        </header>
    )
}

export default NavBar