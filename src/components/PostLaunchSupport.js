import React from 'react';
import Card from '@/components/ui/Card';

const tiers = [
    { name: 'Basic', price: '£100', meta: 'Up to 2 hours · Small updates &amp; fixes · Email support' },
    { name: 'Standard', price: '£250', meta: 'Up to 5 hours · Priority response · Small improvements / features' },
    { name: 'Pro', price: '£500', meta: 'Up to 10 hours · Priority turnaround · Ongoing improvements &amp; feature work' },
];

const PostLaunchSupport = () => (
    <section className='w-full bg-lightGrey px-8 py-20 laptop:px-6 tablet:px-5 tablet:py-14'>
        <div className='mx-auto max-w-7xl'>
            <div className='mb-12 max-w-2xl'>
                <p className='font-rubik text-xs font-semibold uppercase tracking-[0.3em] text-orange'>Post-launch</p>
                <h2 className='font-rubik mt-2 text-4xl font-extrabold text-dark tablet:text-3xl'>Support &amp; maintenance</h2>
                <p className='mt-3 font-montLight text-base leading-7 text-dark/70'>
                    Flexible options to keep your product fast, secure, and up-to-date after going live.
                </p>
            </div>

            <div className='grid grid-cols-2 gap-6 laptop:grid-cols-1'>
                <Card as='article' tone='light' padding='lg'>
                    <div className='flex items-baseline justify-between gap-4'>
                        <h3 className='font-rubik text-2xl font-extrabold text-dark'>Ad-hoc support</h3>
                        <span className='font-rubik text-xs font-semibold uppercase tracking-[0.2em] text-orange'>Pay-as-you-go</span>
                    </div>
                    <p className='mt-4 font-montLight text-sm leading-7 text-dark/70'>
                        Best for small fixes, minor updates, and occasional feature requests.
                    </p>

                    <dl className='mt-6 space-y-4'>
                        <div>
                            <dt className='font-rubik text-xs font-semibold uppercase tracking-[0.2em] text-dark/50'>Pricing</dt>
                            <dd className='mt-1 font-montLight text-sm text-dark/85'>£40–£60/hour <em className='text-dark/60'>or</em> £150–£300 per small task</dd>
                        </div>
                        <div>
                            <dt className='font-rubik text-xs font-semibold uppercase tracking-[0.2em] text-dark/50'>Examples</dt>
                            <dd className='mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-montLight text-sm text-dark/85'>
                                <span>· Fixing bugs</span>
                                <span>· Updating content</span>
                                <span>· Adding small features</span>
                                <span>· Performance tweaks</span>
                            </dd>
                        </div>
                        <div>
                            <dt className='font-rubik text-xs font-semibold uppercase tracking-[0.2em] text-dark/50'>Turnaround</dt>
                            <dd className='mt-1 font-montLight text-sm text-dark/85'>Typically 1–3 business days</dd>
                        </div>
                    </dl>
                </Card>

                <Card as='article' tone='dark' padding='lg'>
                    <div className='flex items-baseline justify-between gap-4'>
                        <h3 className='font-rubik text-2xl font-extrabold text-light'>Ongoing support</h3>
                        <span className='font-rubik text-xs font-semibold uppercase tracking-[0.2em] text-orange'>Retainer</span>
                    </div>
                    <p className='mt-4 font-montLight text-sm leading-7 text-light/75'>
                        Best for clients who want ongoing help, peace of mind, and regular updates.
                    </p>

                    <ul className='mt-6 divide-y divide-light/10'>
                        {tiers.map((t) => (
                            <li key={t.name} className='py-4 first:pt-0 last:pb-0'>
                                <div className='flex items-baseline justify-between'>
                                    <p className='font-rubik text-lg font-bold text-light'>{t.name}</p>
                                    <p className='font-rubik text-xl font-extrabold text-orange'>{t.price}<span className='ml-0.5 font-montLight text-xs text-light/60'>/mo</span></p>
                                </div>
                                <p className='mt-1 font-montLight text-xs text-light/70' dangerouslySetInnerHTML={{__html: t.meta}} />
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </div>
    </section>
);

export default PostLaunchSupport;
