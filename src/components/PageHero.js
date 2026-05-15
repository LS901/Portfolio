import React from 'react';

const PageHero = ({ eyebrow, title, description, children }) => (
    <section
        className='relative w-full overflow-hidden bg-darkGrey px-8 pt-20 pb-24 text-light laptop:px-6 laptop:pt-16 laptop:pb-20 tablet:px-5 tablet:pt-12 tablet:pb-14'
        style={{
            backgroundImage:
                "linear-gradient(120deg, rgba(4,30,43,0.92) 0%, rgba(4,30,43,0.78) 55%, rgba(4,30,43,0.55) 100%), url('/images/background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center right'
        }}
    >
        <div className='mx-auto max-w-6xl'>
            {eyebrow && (
                <p className='font-rubik text-xs font-semibold uppercase tracking-[0.35em] text-orange'>{eyebrow}</p>
            )}
            <h1 className='font-rubik mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight laptop:text-4xl tablet:text-3xl'>
                {title}
            </h1>
            {description && (
                <p className='font-montLight mt-5 max-w-2xl text-base leading-7 text-light/80 tablet:mt-4 tablet:text-sm tablet:leading-6'>
                    {description}
                </p>
            )}
            {children}
        </div>
    </section>
);

export default PageHero;
