import React from 'react';

const PostLaunchSupport = () => {
    return (
        <div className='px-12 tablet:px-6 py-6 tablet:py-8'>
            <div className='mb-10'>
              <h2 className='font-rubik text-4xl font-extrabold'>Post-launch support</h2>
              <p className='font-light text-lg mt-3 max-w-3xl'>Flexible support and maintenance options to keep your product fast, secure, and up-to-date after going live.</p>
            </div>
            
            <div className='grid grid-cols-2 laptop:grid-cols-1 gap-8'>
                {/* Ad-hoc Support */}
                <div className='rounded-xl bg-white shadow-2xl p-8'>
                    <div className='mb-4'>
                        <h3 className='font-rubik text-2xl font-extrabold mb-1'>Ad-hoc Support</h3>
                        <p className='font-light text-orange font-bold'>Pay-as-you-go</p>
                    </div>
                    <p className='font-light leading-7 mb-4'>
                        <strong>Best for:</strong> Small fixes, minor updates, and occasional feature requests.
                    </p>
                    <div className='mb-4'>
                        <p className='font-bold mb-1'>Pricing:</p>
                        <p className='font-light leading-7'>£40–£60/hour <em>or</em> £150–£300 per small task (fixed price)</p>
                    </div>
                    <div className='mb-4'>
                        <p className='font-bold mb-1'>Examples:</p>
                        <ul className='list-disc pl-5 font-light leading-7'>
                            <li>Fixing bugs</li>
                            <li>Updating content</li>
                            <li>Adding small features</li>
                            <li>Performance tweaks</li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-bold mb-1'>Turnaround:</p>
                        <p className='font-light leading-7'>Typically 1–3 business days</p>
                    </div>
                </div>

                {/* Ongoing Support */}
                <div className='rounded-xl bg-darkGrey text-lightGrey shadow-2xl p-8'>
                    <div className='mb-4'>
                        <h3 className='font-rubik text-2xl font-extrabold mb-1'>Ongoing Support</h3>
                        <p className='font-montLight text-sm uppercase tracking-[0.2em] text-orange'>Retainer</p>
                    </div>
                    <p className='font-light leading-7 mb-6'>
                        <strong>Best for:</strong> Clients who want ongoing help, peace of mind, and regular updates.
                    </p>
                    
                    <div className='flex flex-col gap-4'>
                        <div className='border-b border-lightGrey/20 pb-4'>
                            <div className='flex justify-between items-center mb-1'>
                                <p className='font-bold text-lg'>Basic</p>
                                <p className='font-rubik text-orange font-bold text-xl'>£100<span className='text-sm font-light'>/mo</span></p>
                            </div>
                            <p className='font-light text-sm'>Up to 2 hours • Small updates/fixes • Email support</p>
                        </div>
                        
                        <div className='border-b border-lightGrey/20 pb-4'>
                            <div className='flex justify-between items-center mb-1'>
                                <p className='font-bold text-lg'>Standard</p>
                                <p className='font-rubik text-orange font-bold text-xl'>£250<span className='text-sm font-light'>/mo</span></p>
                            </div>
                            <p className='font-light text-sm'>Up to 5 hours • Priority response • Small improvements/features</p>
                        </div>

                        <div>
                            <div className='flex justify-between items-center mb-1'>
                                <p className='font-bold text-lg'>Pro</p>
                                <p className='font-rubik text-orange font-bold text-xl'>£500<span className='text-sm font-light'>/mo</span></p>
                            </div>
                            <p className='font-light text-sm'>Up to 10 hours • Priority turnaround • Ongoing improvements & feature work</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostLaunchSupport;
