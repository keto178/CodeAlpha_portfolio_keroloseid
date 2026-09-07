export default function robots() {
    const baseUrl = "https://keroloseid.com";

    return {
    rules: {
        userAgent: "*",
        allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    };
}