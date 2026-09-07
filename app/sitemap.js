export default function sitemap() {
    const baseUrl = "https://keroloseid.com";
    const locales = ["en", "ar"];
    const pages = [
        { path: "", priority: 1, changeFrequency: "monthly" },
        { path: "/Projects", priority: 0.8, changeFrequency: "monthly" },
        { path: "/About", priority: 0.8, changeFrequency: "monthly" },
        { path: "/Blog", priority: 0.7, changeFrequency: "monthly" },
        { path: "/Contact", priority: 0.7, changeFrequency: "monthly" },
    ];

    const entries = [];

    for (const page of pages) {
        for (const locale of locales) {
            const alternates = {};
            for (const altLocale of locales) {
                alternates[altLocale] = `${baseUrl}/${altLocale}${page.path}`;
            }

            entries.push({
                url: `${baseUrl}/${locale}${page.path}`,
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