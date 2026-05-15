import React from 'react';
import Card from '@/components/ui/Card';

const services = [
    {
        title: 'Full-stack website creation',
        description: 'End-to-end development using Next.js, React, Tailwind CSS, and shadcn/ui for robust, beautiful, and maintainable applications.'
    },
    {
        title: 'Performance audit',
        description: 'Deep dive into load times, Core Web Vitals, and accessibility scores to optimise your existing front-end architecture.'
    },
    {
        title: 'MVP development',
        description: 'Rapid prototyping and scalable foundations using PostgreSQL and Next API routing to bring your ideas to market quickly.'
    },
    {
        title: 'CMS integration',
        description: 'Headless CMS setups (Sanity, Contentful, etc.) seamlessly hooked up to your front-end for effortless content management.'
    },
    {
        title: 'Ongoing support / retainers',
        description: 'Monthly dedicated design and development support for iterative improvements and product polish without hiring full-time.'
    }
];

const Services = () => (
    <section className='w-full bg-lightGrey px-8 py-20 laptop:px-6 tablet:px-5 tablet:py-14'>
        <div className='mx-auto max-w-7xl'>
            <div className='mb-12 max-w-2xl'>
                <p className='font-rubik text-xs font-semibold uppercase tracking-[0.3em] text-orange'>Services</p>
                <h2 className='font-rubik mt-2 text-4xl font-extrabold text-dark tablet:text-3xl'>What I can provide</h2>
                <p className='mt-3 font-montLight text-base leading-7 text-dark/70'>
                    Specialised services focused on modern web development, speed, and scalable architecture.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-6 desktop:grid-cols-2 mobile:grid-cols-1'>
                {services.map((service) => (
                    <Card key={service.title} as='article' tone='light' padding='lg'>
                        <h3 className='font-rubik text-xl font-extrabold text-dark'>{service.title}</h3>
                        <p className='mt-3 font-montLight text-sm leading-7 text-dark/70'>{service.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export default Services;
