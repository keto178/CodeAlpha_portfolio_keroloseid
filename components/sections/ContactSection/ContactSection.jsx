import { Link } from '@/i18n/navigation'
import './ContactSection.css'
import { getTranslations } from 'next-intl/server'

export default async function ContactSection() {
    const t = await getTranslations('Contact')

    return (
    <div className='continar contact-section'>
        <div className="header">
            <p>{t('eyebrow')}</p>
            <h2>{t('heading')}</h2>
        </div>
        <div className="continar-contact">
            <div className="item1">
                <h3>{t('getInTouch')}</h3>
                <p className='pp'>{t('description')}</p>
                <a href="mailto:kerolos.eid159@gmail.com" className="contact-row"><span className="contact-label">{t('emailLabel')}</span><span className="contact-value">kerolos.eid159@gmail.com</span></a>
                <a href="tel:+201270233635" className="contact-row"><span className="contact-label">{t('phoneLabel')}</span><span className="contact-value">+20 12 70233635</span></a>
                <a href="https://wa.me/201270233635" target="_blank" rel="noreferrer" className="contact-row"><span className="contact-label">WhatsApp</span><span className="contact-value">WhatsApp</span></a>
                <a href="https://www.linkedin.com/in/kerolos-eid-70aa08388" target="_blank" rel="noreferrer" className="contact-row"><span className="contact-label">LinkedIn</span><span className="contact-value">LinkedIn</span></a>
                <a href="https://github.com/keto178" target="_blank" rel="noreferrer" className="contact-row"><span className="contact-label">GitHub</span><span className="contact-value">GitHub</span></a>
                <a href="/Kerolos_Eid_FrontEnd_Developer_CV.pdf" className='btn-cv'>{t('downloadCv')}</a>
            </div>
            <div className="item2 availability-card">
                <p className="availability-label">{t('availabilityLabel')}</p>
                <h3>{t('availabilityHeading')}</h3>
                <p className="availability-description">{t('availabilityDesc')}</p>
                <div className="availability-actions">
                    <p className="availability-status">{t('currentlyAvailable')}</p>
                    <a className="availability-cta" href="https://wa.me/201270233635" target="_blank" rel="noreferrer">{t('startConversation')}</a>
                </div>
            </div>
        </div>
    </div>
    )
}
