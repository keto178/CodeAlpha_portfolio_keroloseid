'use client'

import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import "./Footar.css"

export default function Footar() {
    const t = useTranslations('Footer')
    const tNav = useTranslations('Common')
    const year = new Date().getFullYear()

    return (
    <footer className="site-footer">
        <div className="site-footer__top">
            <div className="site-footer__identity">
                <h2>{t('name')}</h2>
                <p className="site-footer__role">{t('role')}</p>
                <p className="site-footer__location">
                    <span className="site-footer__location-icon" aria-hidden="true">⌖</span>
                    {t('location')}
                </p>
            </div>

            <div className="site-footer__links">
                <nav className="site-footer__nav" aria-label={t('footerNavLabel')}>
                    <Link href="/">{tNav('home')}</Link>
                    <Link href="/About">{tNav('about')}</Link>
                    <Link href="/Projects">{tNav('projects')}</Link>
                    <Link href="/Blog">{tNav('blog')}</Link>
                    <Link href="/Contact">{tNav('contact')}</Link>
                </nav>
                <nav className="site-footer__socials" aria-label={t('socialLinksLabel')}>
                    <a href="https://www.linkedin.com/in/kerolos-eid-70aa08388" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/keto178" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://wa.me/201270233635" target="_blank" rel="noreferrer">WhatsApp</a>
                    <a href="mailto:kerolos.eid159@gmail.com">Email</a>
                </nav>
            </div>
        </div>

        <div className="site-footer__bottom">
            <p>{t('copyright', {year})}</p>
        </div>
    </footer>
    )
}
