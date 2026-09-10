import React from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import './Project.css'
import { projects } from '@/data/projects'
import { getTranslations } from 'next-intl/server'

export default async function Project() {
    const t = await getTranslations('Projects')
    const tItems = await getTranslations('ProjectItems')

    const projectTranslations = [
        { titleKey: 'project1Title', descKey: 'project1Desc' },
        { titleKey: 'project2Title', descKey: 'project2Desc' },
        { titleKey: 'project3Title', descKey: 'project3Desc' },
    ]

    return (
        <section id="projects" className="home-projects">
            <div className="home-projects__header">
                <div>
                    <p>{t('selectedWork')}</p>
                    <h2>{t('heading')}</h2>
                </div>
                <Link href="/projects" className="home-projects__all">{t('allProjects')} <span aria-hidden="true">&#8599;</span></Link>
            </div>
            <div className="home-projects__grid">
                {projects.map((project, index) => (
                    <article className="home-project-card" key={`${project.title}-${index}`}>
                        <Image src={project.image} alt={tItems(projectTranslations[index]?.titleKey || 'project1Title')} width={480} height={315} className="home-project-card__image" />
                        <div className="home-project-card__content">
                            <h3>{tItems(projectTranslations[index]?.titleKey || 'project1Title')}</h3>
                            <p>{tItems(projectTranslations[index]?.descKey || 'project1Desc')}</p>
                            <div className="home-project-card__tech">
                                {project.tech.map((item) => <span key={item}>{item}</span>)}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
