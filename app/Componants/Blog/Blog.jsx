import './Blog.css'
import { getTranslations } from 'next-intl/server'

export default async function Blog() {
    const t = await getTranslations('Blog')
    const tItems = await getTranslations('BlogItems')

    const blogData = [
        { titleKey: 'blog1Title', descKey: 'blog1Desc' },
        { titleKey: 'blog2Title', descKey: 'blog2Desc' },
        { titleKey: 'blog3Title', descKey: 'blog3Desc' },
    ]

    return (
    <div className='continar blog-section'>
        <div className="item1">
            <p>{t('eyebrow')}</p>
            <h2>{t('heading')}</h2>
        </div>
        <div className="item3">
            {blogData.map((blog, index) => (
                <div className="blog" key={`${blog.titleKey}-${index}`}>
                    <h3>{tItems(blog.titleKey)}</h3>
                    <p>{tItems(blog.descKey)}</p>
                    <p className='link-p'>{t('readArticle')}</p>
                </div>
            ))}
        </div>
    </div>
    )
}
