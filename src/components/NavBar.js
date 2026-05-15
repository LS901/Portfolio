import React, {useEffect, useState} from 'react'
import { createPortal } from 'react-dom';
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkedInIcon, GithubIcon, InstagramIcon } from "@/components/Icons";
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
];

const DesktopLink = ({href, title, isActive}) => (
    <Link
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={`relative font-rubik text-sm font-medium px-1 py-2 transition-colors duration-200 hover:text-orange ${isActive ? 'text-orange' : 'text-darkGrey'}`}
    >
        {title}
        <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-orange transition-[width] duration-200 ${isActive ? 'w-full' : 'w-0'}`} />
    </Link>
);

const MobileLink = ({href, title, isActive, onNavigate}) => (
    <Link
        href={href}
        onClick={onNavigate}
        aria-current={isActive ? 'page' : undefined}
        className={`font-rubik text-2xl font-semibold py-2 transition-colors duration-200 ${isActive ? 'text-orange' : 'text-light hover:text-orange'}`}
    >
        {title}
    </Link>
);

const NavBar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => { setIsOpen(false); }, [router.asPath]);

    return (
        <header className={`sticky top-0 z-40 w-full bg-light/85 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.06)]' : ''}`}>
            <div className='mx-auto flex max-w-7xl items-center justify-between px-8 py-5 laptop:px-6 tablet:px-5 tablet:py-4'>
                <Link href='/' className='font-rubik font-extrabold text-base tracking-tight text-orange hover:opacity-80 transition-opacity'>
                    Lewis Saunders
                </Link>

                <nav aria-label='Primary' className='flex items-center gap-8 desktop:gap-6 laptop:hidden'>
                    {navItems.map((item) => (
                        <DesktopLink
                            key={item.href}
                            href={item.href}
                            title={item.label}
                            isActive={router.asPath === item.href}
                        />
                    ))}
                    <span className='h-5 w-px bg-darkGrey/15' aria-hidden='true' />
                    <div className='flex items-center gap-4'>
                        <motion.a
                            href='https://linkedin.com/in/lewis-saunders'
                            target='_blank' rel='noreferrer'
                            aria-label='LinkedIn profile'
                            whileHover={{y: -2}} whileTap={{scale: 0.92}}
                            className='block w-5 text-darkGrey hover:text-orange transition-colors'
                        ><LinkedInIcon /></motion.a>
                        <motion.a
                            href='https://github.com/LS901'
                            target='_blank' rel='noreferrer'
                            aria-label='GitHub profile'
                            whileHover={{y: -2}} whileTap={{scale: 0.92}}
                            className='block w-5 text-darkGrey hover:text-orange transition-colors'
                        ><GithubIcon /></motion.a>
                        <motion.a
                            href='https://www.instagram.com/lewissaunders.dev/'
                            target='_blank' rel='noreferrer'
                            aria-label='Instagram profile'
                            whileHover={{y: -2}} whileTap={{scale: 0.92}}
                            className='block w-5 text-darkGrey hover:text-orange transition-colors'
                        ><InstagramIcon /></motion.a>
                    </div>
                </nav>

                <button
                    type='button'
                    className='hidden laptop:inline-flex flex-col items-center justify-center gap-1.5 p-2 -mr-2'
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    aria-controls='mobile-menu'
                    onClick={() => setIsOpen((v) => !v)}
                >
                    <span className={`block h-0.5 w-6 rounded-sm bg-darkGrey transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block h-0.5 w-6 rounded-sm bg-darkGrey transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`block h-0.5 w-6 rounded-sm bg-darkGrey transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </button>
            </div>

            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className='fixed inset-0 z-[100] hidden laptop:grid place-items-center p-5'
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2, ease: 'easeOut'}}
                        >
                            <div
                                className='absolute inset-0 bg-dark/80 backdrop-blur-md'
                                onClick={() => setIsOpen(false)}
                                aria-hidden='true'
                            />
                            <motion.div
                                id='mobile-menu'
                                role='dialog' aria-modal='true' aria-label='Site menu'
                                className='relative w-full max-w-md rounded-2xl bg-darkGrey/95 backdrop-blur-md p-10 shadow-2xl'
                                initial={{scale: 0.95}}
                                animate={{scale: 1}}
                                exit={{scale: 0.95}}
                                transition={{duration: 0.2, ease: 'easeOut'}}
                            >
                                <button
                                    type='button'
                                    onClick={() => setIsOpen(false)}
                                    aria-label='Close menu'
                                    className='absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-light/70 hover:text-orange transition-colors'
                                >
                                    <span aria-hidden='true' className='text-2xl leading-none'>&times;</span>
                                </button>
                                <nav aria-label='Mobile' className='flex flex-col items-center gap-1'>
                                    {navItems.map((item) => (
                                        <MobileLink
                                            key={item.href}
                                            href={item.href}
                                            title={item.label}
                                            isActive={router.asPath === item.href}
                                            onNavigate={() => setIsOpen(false)}
                                        />
                                    ))}
                                </nav>
                                <div className='mt-8 flex items-center justify-center gap-6'>
                                    <a href='https://linkedin.com/in/lewis-saunders' target='_blank' rel='noreferrer' aria-label='LinkedIn profile' className='block w-6 text-light hover:text-orange transition-colors'>
                                        <LinkedInIcon />
                                    </a>
                                    <a href='https://github.com/LS901' target='_blank' rel='noreferrer' aria-label='GitHub profile' className='block w-6 text-light hover:text-orange transition-colors'>
                                        <GithubIcon />
                                    </a>
                                    <a href='https://www.instagram.com/lewissaunders.dev/' target='_blank' rel='noreferrer' aria-label='Instagram profile' className='block w-6 text-light hover:text-orange transition-colors'>
                                        <InstagramIcon />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </header>
    );
};

export default NavBar;
