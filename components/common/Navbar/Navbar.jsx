'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import "./Navbar.css"
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations('Navbar')

    return (
    <header>
        <nav className="site-navbar">
            <div className="continer">
                <div className="name">
                    <Link href="/"><h3>Kerolos eid</h3></Link>
                </div>

                <div className={`nav-link${isOpen ? ' nav-link--open' : ''}`}>
                    <Link href="/" onClick={() => setIsOpen(false)}>{t('home')}</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>{t('about')}</Link>
                    <Link href="/projects" onClick={() => setIsOpen(false)}>{t('projects')}</Link>
                    <Link href="/blog" onClick={() => setIsOpen(false)}>{t('blog')}</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>{t('contact')}</Link>
                </div>

                <div className="nav-controls">
                    <LanguageSwitcher />

                    <button
                        className={`hamburger${isOpen ? ' hamburger--active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? t('closeMenu') : t('openMenu')}
                        aria-expanded={isOpen}
                    >
                        <span className="hamburger__line" />
                        <span className="hamburger__line" />
                        <span className="hamburger__line" />
                    </button>
                </div>

                <div className={`Btn${isOpen ? ' Btn--open' : ''}`}>
                    <a href="/Kerolos_Eid_FrontEnd_Developer_CV.pdf" className="btn-cv" onClick={() => setIsOpen(false)}>
                        <span>{t('downloadCv')}</span>
                        <span className="btn-cv__icon" aria-hidden="true">↓</span>
                    </a>
                </div>
            </div>
        </nav>
    </header>
    )
}
