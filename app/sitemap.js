export default function sitemap() {
    const baseUrl = "https://keroloseid.com";
    const defaultLocale = "en";
    const locales = ["en", "ar"];
    const pages = [
        { path: "", priority: 1, changeFrequency: "monthly" },
        { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
        { path: "/about", priority: 0.8, changeFrequency: "monthly" },
        { path: "/blog", priority: 0.7, changeFrequency: "monthly" },
        { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    ];

    // localePrefix: 'as-needed' — default locale (en) has no prefix
    const localePath = (locale, path) =>
        locale === defaultLocale
            ? `${baseUrl}${path}`
            : `${baseUrl}/${locale}${path}`;

    const entries = [];

    for (const page of pages) {
        for (const locale of locales) {
            const alternates = {};
            for (const altLocale of locales) {
                alternates[altLocale] = localePath(altLocale, page.path);
            }

            entries.push({
                url: localePath(locale, page.path),
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
                alternates: {
                    languages: alternates,
                },
            });
        }
    }

    return entries;
}