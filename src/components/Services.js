import React from 'react';

const services = [
  {
    title: 'Full-stack website creation',
    description: 'End-to-end development using Next.js, React, Tailwind CSS, and shadcn/ui for robust, beautiful, and maintainable applications.'
  },
  {
    title: 'Performance audit',
    description: 'Deep dive into load times, Core Web Vitals, and accessibility scores to optimize your existing front-end architecture.'
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
    title: 'Ongoing Support / Retainers',
    description: 'Monthly dedicated design and development support for iterative improvements and product polish without hiring full-time.'
  }
];

const Services = () => {
    return (
        <div className='px-12 tablet:px-6 py-6 tablet:py-8'>
            <div className='mb-10'>
              <h2 className='font-rubik text-4xl font-extrabold'>What I can provide</h2>
              <p className='font-light text-lg mt-3 max-w-3xl'>Specialized services focusing on modern web development, speed, and scalable architecture.</p>
            </div>
            <div className='grid grid-cols-3 laptop:grid-cols-2 tablet:!grid-cols-1 gap-8'>
              {services.map((service) => (
                <div key={service.title} className='rounded-xl bg-white shadow-2xl p-8'>
                  <h3 className='font-rubik text-2xl font-extrabold mb-4'>{service.title}</h3>
                  <p className='font-light leading-7'>{service.description}</p>
                </div>
              ))}
            </div>
        </div>
    );
};

export default Services;
