import React from 'react';
import Card from '@/components/ui/Card';

const pricing = [
    {
        label: 'Small jobs',
        value: '£300–£800',
        detail: 'For small scoped builds, landing pages, component updates, and targeted UI work.'
    },
    {
        label: 'Standard websites',
        value: '£800–£1500',
        detail: 'A common starting point for a small business, portfolio, or full-stack marketing website.',
        featured: true,
    },
    {
        label: 'Contract work',
        value: '£250–£350/day',
        detail: 'For embedded full-stack support, delivery sprints, and feature work.'
    }
];

const Pricing = () => (
    <section className='w-full bg-light px-8 py-20 laptop:px-6 tablet:px-5 tablet:py-14'>
        <div className='mx-auto max-w-7xl'>
            <div className='mb-12 max-w-2xl'>
                <p className='font-rubik text-xs font-semibold uppercase tracking-[0.3em] text-orange'>Pricing</p>
                <h2 className='font-rubik mt-2 text-4xl font-extrabold text-dark tablet:text-3xl'>Starting rates</h2>
                <p className='mt-3 font-montLight text-base leading-7 text-dark/70'>
                    Ballpark starting points to make budgeting easier. Final quotes depend on scope, integrations, content readiness, and turnaround time.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-6 laptop:grid-cols-1'>
                {pricing.map((item) => (
                    <Card
                        key={item.label}
                        as='article'
                        tone={item.featured ? 'dark' : 'light'}
                        padding='lg'
                        className={item.featured ? 'relative overflow-visible' : ''}
                    >
                        {item.featured && (
                            <span className='absolute -top-3 right-6 rounded-full bg-orange px-3 py-1 font-rubik text-xs font-semibold uppercase tracking-wider text-white'>Most common</span>
                        )}
                        <p className={`font-rubik text-xs font-semibold uppercase tracking-[0.25em] ${item.featured ? 'text-orange' : 'text-orange'}`}>{item.label}</p>
                        <p className={`font-rubik mt-4 text-3xl font-extrabold ${item.featured ? 'text-light' : 'text-dark'}`}>{item.value}</p>
                        <p className={`mt-5 font-montLight text-sm leading-7 ${item.featured ? 'text-light/80' : 'text-dark/70'}`}>{item.detail}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export default Pricing;
