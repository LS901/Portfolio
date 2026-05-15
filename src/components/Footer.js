import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { LinkedInIcon, GithubIcon, InstagramIcon } from "@/components/Icons";

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
];

const Footer = () => {
    const [year, setYear] = useState(2026);
    useEffect(() => { setYear(new Date().getFullYear()); }, []);

    return (
        <footer className='w-full bg-darkGrey text-light'>
            <div className='mx-auto max-w-7xl px-8 py-12 laptop:px-6 tablet:px-5 tablet:py-10'>
                <div className='grid grid-cols-3 gap-10 tablet:grid-cols-1 tablet:gap-8'>
                    <div>
                        <p className='font-rubik text-lg font-extrabold text-orange'>Lewis Saunders</p>
                        <p className='mt-3 max-w-xs font-montLight text-sm leading-6 text-light/70'>
                            Full-stack engineer building modern websites, MVPs, and front-end experiences for product teams.
                        </p>
                    </div>

                    <nav aria-label='Footer' className='flex flex-col gap-2'>
                        <p className='font-rubik text-xs font-semibold uppercase tracking-[0.25em] text-light/50 mb-1'>Sitemap</p>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className='font-montLight text-sm text-light/85 hover:text-orange transition-colors w-fit'>
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className='flex flex-col gap-3'>
                        <p className='font-rubik text-xs font-semibold uppercase tracking-[0.25em] text-light/50'>Contact</p>
                        <a href='mailto:lewissaunders.dev@gmail.com' className='font-montLight text-sm text-light/85 hover:text-orange transition-colors w-fit'>
                            lewissaunders.dev@gmail.com
                        </a>
                        <div className='mt-2 flex items-center gap-4'>
                            <a href='https://linkedin.com/in/lewis-saunders' target='_blank' rel='noreferrer' aria-label='LinkedIn profile' className='block w-5 text-light/85 hover:text-orange transition-colors'>
                                <LinkedInIcon fill />
                            </a>
                            <a href='https://github.com/LS901' target='_blank' rel='noreferrer' aria-label='GitHub profile' className='block w-5 text-light/85 hover:text-orange transition-colors'>
                                <GithubIcon fill />
                            </a>
                            <a href='https://www.instagram.com/lewissaunders.dev/' target='_blank' rel='noreferrer' aria-label='Instagram profile' className='block w-5 text-light/85 hover:text-orange transition-colors'>
                                <InstagramIcon fill />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='mt-10 border-t border-light/10 pt-6 flex justify-between items-center tablet:flex-col tablet:gap-3 tablet:items-start'>
                    <p className='font-montLight text-xs text-light/50'>{year} &copy; Lewis Saunders. All rights reserved.</p>
                    <p className='font-montLight text-xs text-light/50'>Built with Next.js &amp; Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
