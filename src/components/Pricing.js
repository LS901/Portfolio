import React from 'react';

const pricing = [
  {
    label: 'Small jobs',
    value: '£300–£800',
    detail: 'For small scoped builds, landing pages, component updates, and targeted UI work.'
  },
  {
    label: 'Standard websites',
    value: '£800–£1500',
    detail: 'A common starting point for a small business, portfolio, or full-stack marketing website.'
  },
  {
    label: 'Contract work',
    value: '£250–£350/day',
    detail: 'For embedded full-stack support, delivery sprints, and feature work.'
  }
];

const Pricing = () => {
    return (
        <div className='px-12 tablet:px-6 py-12'>
            <div className='mb-10'>
              <h2 className='font-rubik text-4xl font-extrabold'>Starting rates</h2>
              <p className='font-light text-lg mt-3 max-w-3xl'>These are ballpark starting points to make budgeting easier. Final quotes depend on scope, integrations, content readiness, and turnaround time.</p>
            </div>
            <div className='grid grid-cols-3 desktop:grid-cols-2 tablet:!grid-cols-1 gap-8 tablet:gap-4'>
              {pricing.map((item) => (
                <div key={item.label} className='rounded-xl bg-darkGrey text-lightGrey shadow-2xl p-8 tablet:p-6 min-h-[220px] tablet:min-h-auto flex flex-col justify-between'>
                  <div>
                    <p className='font-montLight text-sm uppercase tracking-[0.2em] text-orange'>{item.label}</p>
                    <h3 className='font-rubik text-3xl font-extrabold mt-4'>{item.value}</h3>
                  </div>
                  <p className='font-light leading-7 mt-6'>{item.detail}</p>
                </div>
              ))}
            </div>
        </div>
    );
};

export default Pricing;
