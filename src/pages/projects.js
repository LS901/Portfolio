import React, {useState} from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Transition from "@/components/Transition";
import ProjectType from "@/components/ProjectType";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import personalProjects from "@/metadata/personal-project-data.json";
import professionalProjects from "@/metadata/itv-project-data.json";

const TechChips = ({items, tone = 'light'}) => (
    <ul className='mt-4 flex flex-wrap gap-1.5'>
        {items.map((tech) => (
            <li
                key={tech}
                className={`font-rubik rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${tone === 'dark' ? 'bg-light/10 text-light/85' : 'bg-dark/5 text-dark/70'}`}
            >
                {tech}
            </li>
        ))}
    </ul>
);

const ProjectMedia = ({src, alt, ratio = 'aspect-[16/10]'}) => {
    if (src) {
        return (
            <div className={`relative w-full ${ratio} overflow-hidden rounded-2xl bg-dark/5`}>
                <Image src={src} alt={alt} fill sizes='(max-width: 1024px) 100vw, 50vw' className='object-cover' />
            </div>
        );
    }
    return (
        <div
            className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl ${ratio}`}
            style={{background: 'radial-gradient(120% 120% at 0% 0%, #0a3247 0%, #041e2b 60%, #021018 100%)'}}
        >
            <span className='font-rubik text-sm font-semibold uppercase tracking-[0.3em] text-light/60'>Preview coming soon</span>
        </div>
    );
};

const PersonalCard = ({project, featured}) => {
    const caseStudyHref = project.hasCaseStudy ? `/projects/${project.slug}` : null;
    const titleNode = caseStudyHref
        ? <Link href={caseStudyHref} className='hover:text-orange transition-colors'>{project.title}</Link>
        : project.title;

    return (
        <Card padding='lg' tone='light' className={featured ? 'grid grid-cols-2 gap-8 laptop:grid-cols-1' : ''}>
                <ProjectMedia src={project.mainImage} alt={`${project.title} preview`} ratio={featured ? 'aspect-[4/3]' : 'aspect-[16/10]'} />
                <div className={featured ? 'flex flex-col justify-center' : 'mt-6'}>
                    {project.hasCaseStudy && (
                        <p className='font-rubik text-xs font-semibold uppercase tracking-[0.25em] text-orange'>Case study</p>
                    )}
                    <h3 className={`font-rubik mt-2 font-extrabold text-dark ${featured ? 'text-3xl' : 'text-xl'}`}>{titleNode}</h3>
                    <p className={`mt-3 font-montLight leading-7 text-dark/75 ${featured ? 'text-base' : 'text-sm'}`}>{project.tagLine}</p>
                    <TechChips items={project.primaryTechsUsed} />
                    <div className='mt-6 flex flex-wrap gap-3'>
                        {caseStudyHref && <Button href={caseStudyHref} variant='primary' size='sm'>Read case study</Button>}
                        {!caseStudyHref && project.uiLink && <Button href={project.uiLink} variant='primary' size='sm' external>Live site</Button>}
                        {caseStudyHref && project.uiLink && <Button href={project.uiLink} variant='ghost' size='sm' external>Live site</Button>}
                        {project.gitLink && <Button href={project.gitLink} variant='ghost' size='sm' external>GitHub</Button>}
                    </div>
                </div>
            </Card>
    );
};

const ProfessionalCard = ({project}) => (
    <article
        className='grid grid-cols-2 gap-10 laptop:grid-cols-1'
    >
        <ProjectMedia src={project.mainImage} alt={`${project.title} preview`} ratio='aspect-[4/3]' />
        <div className='flex flex-col justify-center'>
            <p className='font-rubik text-xs font-semibold uppercase tracking-[0.25em] text-orange'>Professional work</p>
            <h3 className='font-rubik mt-2 text-3xl font-extrabold text-dark'>{project.title}</h3>
            <p className='mt-3 font-montLight text-base leading-7 text-dark/75'>{project.tagLine}</p>
            <TechChips items={project.primaryTechsUsed} />
            {project.uiLink && (
                <div className='mt-6'>
                    <Button href={project.uiLink} variant='primary' size='sm' external>Visit site</Button>
                </div>
            )}
        </div>
    </article>
);

export default function Projects() {
    const [projectPage, setProjectPage] = useState('personal');
    const list = projectPage === 'personal' ? personalProjects : professionalProjects;
    const [featured, ...rest] = list;

    return (
        <>
            <Head>
                <title>Projects | Lewis Saunders</title>
                <meta name='description' content='Selected professional and personal product work by Lewis Saunders.' />
            </Head>
            <Transition />
            <main className='flex flex-col items-center text-dark w-full bg-light'>
                <PageHero
                    eyebrow='Portfolio'
                    title='Projects'
                    description='Selected work from production teams and personal builds.'
                />

                <section className='w-full px-8 py-16 laptop:px-6 tablet:px-5 tablet:py-12'>
                    <div className='mx-auto max-w-7xl'>
                        <div className='mb-10 flex flex-wrap items-end justify-between gap-6'>
                            <div className='max-w-2xl'>
                                <p className='font-rubik text-xs font-semibold uppercase tracking-[0.3em] text-orange'>{projectPage === 'personal' ? 'Personal builds' : 'Professional work'}</p>
                                <h2 className='font-rubik mt-2 text-3xl font-extrabold text-dark tablet:text-2xl'>{projectPage === 'personal' ? 'Side projects & experiments' : 'Production work'}</h2>
                            </div>
                            <ProjectType projectPage={projectPage} changeProjectType={setProjectPage} />
                        </div>

                        {projectPage === 'personal' ? (
                            <div className='space-y-10'>
                                <PersonalCard project={featured} featured />
                                <div className='grid grid-cols-2 gap-8 laptop:grid-cols-1'>
                                    {rest.map((p) => (
                                        <PersonalCard key={p.slug || p.title} project={p} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className='space-y-16'>
                                {list.map((p) => (
                                    <ProfessionalCard key={p.title} project={p} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}
