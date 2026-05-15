import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Transition from '@/components/Transition';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import personalProjects from '@/metadata/personal-project-data.json';
import { getProjectCaseStudyBySlug, getProjectCaseStudySlugs } from '@/metadata/project-case-studies';

const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const SectionCard = ({ title, paragraphs = [], bullets = [] }) => (
    <Card as='article' tone='light' padding='lg'>
        <h3>{title}</h3>
        <div className='mt-4 space-y-4'>
            {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
        {bullets.length > 0 && (
            <ul className='mt-6 space-y-3'>
                {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                ))}
            </ul>
        )}
    </Card>
);

const ProjectCaseStudyPage = ({ project, caseStudy }) => {
    const pageTitle = `${caseStudy.title} Case Study | Lewis Saunders`;
    const sectionsWithIds = caseStudy.sections.map((s, i) => ({...s, anchor: s.id || slugify(s.title) || `section-${i}`}));

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name='description' content={caseStudy.pageDescription} />
                <meta property='og:title' content={pageTitle} />
                <meta property='og:description' content={caseStudy.pageDescription} />
                <meta property='og:type' content='article' />
            </Head>
            <Transition />
            <main className='flex w-full flex-col items-center justify-center bg-light'>
                {/* Hero */}
                <section className='w-full bg-darkGrey px-16 pt-14 pb-20 text-light laptop:px-10 tablet:px-5 tablet:pt-8 tablet:pb-12'>
                    <div className='mx-auto grid max-w-6xl grid-cols-12 gap-12 desktop:grid-cols-1 desktop:gap-10'>
                        <div className='col-span-6 flex flex-col justify-center'>
                            <Link href='/projects' className='mb-6 font-rubik text-xs font-semibold uppercase tracking-[0.35em] text-light/65 transition-colors hover:text-light'>
                                &larr; Back to projects
                            </Link>
                            <p className='font-rubik text-xs font-semibold uppercase tracking-[0.35em] text-orange'>{caseStudy.eyebrow}</p>
                            <h1 className='mt-5 font-rubik text-6xl font-extrabold leading-[1.05] tracking-tight laptop:text-5xl tablet:text-[2rem] tablet:leading-tight'>{caseStudy.title}</h1>
                            <p className='mt-6 max-w-2xl font-rubik text-xl leading-9 text-lightGrey/95 tablet:text-base tablet:leading-7'>{caseStudy.oneLineSummary}</p>
                            <div className='mt-8 flex flex-wrap gap-3'>
                                {project.uiLink && (
                                    <Button href={project.uiLink} variant='primary' size='md' external>Live product</Button>
                                )}
                                {project.gitLink && (
                                    <Button href={project.gitLink} variant='outline' size='md' external>Source code</Button>
                                )}
                            </div>
                        </div>
                        <div className='col-span-6 flex items-center justify-center desktop:mt-2'>
                            {project.mainImage && (
                                <div className='relative w-full pb-[14%] desktop:flex desktop:flex-col desktop:items-stretch desktop:gap-5 desktop:pb-0'>
                                    <div className='overflow-hidden rounded-2xl shadow-2xl ring-1 ring-light/10 desktop:w-full'>
                                        <Image src={project.mainImage} alt={project.title} width={1400} height={900} className='h-auto w-full object-cover' priority />
                                    </div>
                                    {caseStudy.heroImages?.[0] && (
                                        <div className='absolute -bottom-2 -right-4 w-[55%] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-light/10 desktop:relative desktop:bottom-0 desktop:right-0 desktop:w-full'>
                                            <Image src={caseStudy.heroImages[0]} alt={`${project.title} secondary view`} width={1400} height={900} className='h-auto w-full object-cover' />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Highlights + tech */}
                <section className='w-full bg-lightGrey px-16 py-12 laptop:px-10 tablet:px-5 tablet:py-8'>
                    <div className='mx-auto max-w-6xl'>
                        <div className='grid grid-cols-3 gap-6 desktop:grid-cols-1'>
                            {caseStudy.heroHighlights.map((highlight) => (
                                <Card key={highlight.label} tone='light' padding='lg'>
                                    <p className='font-rubik text-xs font-semibold uppercase tracking-[0.35em] text-orange'>{highlight.label}</p>
                                    <p className='mt-3 font-montLight text-base leading-7 text-dark/85'>{highlight.value}</p>
                                </Card>
                            ))}
                        </div>
                        <div className='mt-6 flex flex-wrap items-center gap-2'>
                            {project.primaryTechsUsed.map((skill) => (
                                <span key={skill} className='font-rubik rounded-full border border-dark/10 bg-white px-3 py-1.5 text-xs font-semibold text-dark/75'>
                                    {skill}
                                </span>
                            ))}
                            {project.responsive === 'Yes' && (
                                <span className='font-rubik rounded-full bg-darkGrey px-3 py-1.5 text-xs font-semibold text-light'>Responsive build</span>
                            )}
                        </div>
                    </div>
                </section>

                {/* Body with sticky TOC */}
                <div className='mx-auto w-full max-w-6xl px-16 py-14 laptop:px-10 tablet:px-5 tablet:py-10'>
                    <div className='grid grid-cols-12 gap-10 desktop:grid-cols-1'>
                        <aside className='col-span-3 desktop:hidden'>
                            <nav aria-label='In this case study' className='sticky top-24'>
                                <p className='font-rubik text-[11px] font-semibold uppercase tracking-[0.3em] text-dark/45'>In this case study</p>
                                <ul className='mt-4 space-y-2'>
                                    {sectionsWithIds.map((s) => (
                                        <li key={s.anchor}>
                                            <a href={`#${s.anchor}`} className='font-montLight block text-sm leading-6 text-dark/65 transition-colors hover:text-orange'>
                                                {s.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>

                        <div className='col-span-9 desktop:col-span-1 space-y-14'>
                            {sectionsWithIds.map((section) => (
                                <section id={section.anchor} key={section.anchor} className='case-study-copy scroll-mt-24'>
                                    <h2>{section.title}</h2>
                                    {section.paragraphs && (
                                        <div className='mt-5 space-y-4'>
                                            {section.paragraphs.map((paragraph) => (
                                                <p key={paragraph}>{paragraph}</p>
                                            ))}
                                        </div>
                                    )}
                                    {section.bullets && (
                                        <ul className='mt-5 space-y-3'>
                                            {section.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.subsections && (
                                        <div className='mt-8 grid grid-cols-2 gap-5 desktop:grid-cols-1'>
                                            {section.subsections.map((sub) => (
                                                <SectionCard key={sub.title} title={sub.title} paragraphs={sub.paragraphs} bullets={sub.bullets} />
                                            ))}
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export const getStaticPaths = async () => ({
    paths: getProjectCaseStudySlugs().map((slug) => ({ params: { slug } })),
    fallback: false
});

export const getStaticProps = async ({ params }) => {
    const project = personalProjects.find((entry) => entry.slug === params.slug && entry.hasCaseStudy);
    const caseStudy = getProjectCaseStudyBySlug(params.slug);

    if (!project || !caseStudy) {
        return { notFound: true };
    }

    return { props: { project, caseStudy } };
};

export default ProjectCaseStudyPage;
