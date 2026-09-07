import React from 'react'
import './About.css'
import { getTranslations } from 'next-intl/server'

export default async function About() {
    const t = await getTranslations('About')

    return (
    <section className='about-continer'>
        <div className="item1">
            <p>{t('eyebrow')}</p>
            <h2>{t('heading')}</h2>
        </div>
        <div className="item2">
            <div className="section">
                <h3>{t('frontendTitle')}</h3>
                <p>{t('frontendDesc')}</p>
            </div>
            <div className="section">
                <h3>{t('webAppsTitle')}</h3>
                <p>{t('webAppsDesc')}</p>
            </div>
            <div className="section">
                <h3>{t('cleanCodeTitle')}</h3>
                <p>{t('cleanCodeDesc')}</p>
            </div>
        </div>
    </section>
    )
}
