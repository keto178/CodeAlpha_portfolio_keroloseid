'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const t = useTranslations('Navbar')

    const switchLocale = () => {
        const newLocale = locale === 'en' ? 'ar' : 'en'
        router.replace(pathname, { locale: newLocale, scroll: false })
    }

    return (
        <button
            className="lang-switcher"
            onClick={switchLocale}
            aria-label={t('switchLanguage')}
            type="button"
        >
            <span className="lang-switcher__label">
                {locale === 'en' ? 'AR' : 'EN'}
            </span>
            <span className="lang-switcher__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            </span>
        </button>
    )
}
