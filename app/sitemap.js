export default function sitemap() {
    const baseUrl = "https://keroloseid.com";

    return [
    {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
    },
    {
        url: `${baseUrl}/Projects`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/About`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/Blog`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${baseUrl}/Contact`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    ];
}