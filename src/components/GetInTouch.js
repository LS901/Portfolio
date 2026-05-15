import React from 'react';
import Button from '@/components/ui/Button';

const GetInTouch = () => (
    <section className='w-full px-8 py-20 laptop:px-6 tablet:px-5 tablet:py-14'>
        <div className='mx-auto max-w-5xl rounded-3xl bg-darkGrey px-12 py-16 text-light shadow-[0_20px_60px_rgba(0,0,0,0.15)] tablet:px-7 tablet:py-12'>
            <p className='font-rubik text-xs font-semibold uppercase tracking-[0.3em] text-orange'>Let&apos;s work together</p>
            <h2 className='font-rubik mt-3 text-5xl font-extrabold leading-tight tablet:text-3xl'>
                Have a project in mind?<br />
                <span className='text-light/85'>Let&apos;s scope it properly.</span>
            </h2>
            <p className='mt-5 max-w-2xl font-montLight text-base leading-7 text-light/75'>
                If you need a website, React or Next.js support, or ongoing front-end help, send over a brief, timeline, and rough budget and I&apos;ll come back with the best next step.
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
                <Button href='mailto:lewissaunders.dev@gmail.com' variant='primary' size='lg' external>Request a quote</Button>
                <Button href='/projects' variant='outline' size='lg'>See past work</Button>
            </div>
        </div>
    </section>
);

export default GetInTouch;
