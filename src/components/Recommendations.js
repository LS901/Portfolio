import React from 'react';
import AnimatedText from "@/components/AnimatedText";

const testimonials = [
    {
        name: 'Julio Alves',
        role: 'Lead Front End Engineer · ITV',
        accent: 'bg-orange/85',
        content: `I had the pleasure of working closely with Lewis for 2 years and have witnessed his remarkable growth as a frontend developer. Lewis has proven to be a reliable and resourceful member of the team, continuously pushing himself to improve and help the team reach its goals. Beyond his technical skills, Lewis excels in communication and collaboration, always maintaining a positive attitude and a proactive approach.`
    },
    {
        name: 'Emily Giblett',
        role: 'Core Front End Engineer · ITV',
        accent: 'bg-darkGrey',
        content: `Lewis is an absolute asset to our team, and it's a joy to work alongside him. He is incredibly diligent, patient and has great attention to detail, making him an excellent pairing companion. I've learnt a lot from our time working together, and I have no doubt that Lewis will make a similarly impactful contribution to any other engineering roles that he takes on in the future.`
    },
    {
        name: 'Iain Smith',
        role: 'Head of Product · News · ITV',
        accent: 'bg-orange/85',
        content: `Lewis has played a vital role in building ITV News' innovative digital services, including our market-leading news proposition on our ITVX streaming platform. He's a very skilled front-end developer who delivers high quality solutions that are used by millions of people. He combines these skills with a passion for detail and contributes great ideas for product development.`
    },
    {
        name: 'Peter Hammans',
        role: 'Senior UI Engineer · HDRUK',
        accent: 'bg-darkGrey',
        content: `Lewis worked in our team as a UI developer at Health Data Research UK with React and Next.js. He worked on our authentication / registration with Keycloak which was new tech, as well as many components both contributing to our component library and more complex features within the site. He turned round a lot of quality work in a short space of time and stayed in regular contact — essential qualities for a remote team.`
    }
];

const Initials = ({name, accent}) => {
    const initials = name.split(' ').map(n => n[0]).join('');
    return (
        <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${accent} font-rubik text-sm font-bold text-white`}>
            {initials}
        </span>
    );
};

const Recommendations = () => (
    <section className='w-full overflow-hidden bg-lightGrey px-8 py-20 laptop:px-6 tablet:px-5 tablet:py-14'>
        <div className='mx-auto max-w-7xl'>
            <div className='mb-12 max-w-2xl'>
                <p className='font-rubik text-xs font-semibold uppercase tracking-[0.3em] text-orange'>Testimonials</p>
                <AnimatedText text='What people I&rsquo;ve worked with say' className='font-rubik mt-2 text-4xl font-extrabold !text-left text-dark tablet:!text-3xl' delay={0.2} />
            </div>

            <div
                className='flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pr-8'
                style={{scrollbarWidth: 'thin'}}
            >
                {testimonials.map((t) => (
                    <article
                        key={t.name}
                        className='snap-start flex w-[420px] tablet:w-[85vw] flex-shrink-0 flex-col rounded-2xl border border-dark/5 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
                    >
                        <div className='flex items-center gap-3'>
                            <Initials name={t.name} accent={t.accent} />
                            <div>
                                <p className='font-rubik text-sm font-bold text-dark'>{t.name}</p>
                                <p className='font-montLight text-xs text-dark/60'>{t.role}</p>
                            </div>
                        </div>
                        <p className='font-montLight mt-5 text-sm leading-7 text-dark/80'>{t.content}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Recommendations;
