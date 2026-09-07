import { Blogs } from "../../data/Blogs";
import { getTranslations } from "next-intl/server";
import "../../Blog/Blog.css";

export default async function BlogPage() {
  const t = await getTranslations("Blog");
  const tItems = await getTranslations("BlogItems");

  const blogData = [
    {
      titleKey: "blog1Title",
      descKey: "blog1Desc",
      tagsKey: "blog1Tags",
    },
    {
      titleKey: "blog2Title",
      descKey: "blog2Desc",
      tagsKey: "blog2Tags",
    },
    {
      titleKey: "blog3Title",
      descKey: "blog3Desc",
      tagsKey: "blog3Tags",
    },
  ];

  return (
    <div className="continar">
      <div className="item1">
        <p>{t("blogPageEyebrow")}</p>
        <h2>{t("blogPageHeading")}</h2>
      </div>
      <div className="item3">
        {blogData.map((blog, index) => (
          <div className="blog" key={`${blog.titleKey}-${index}`}>
            <h3>{tItems(blog.titleKey)}</h3>
            <p>{tItems(blog.descKey)}</p>
            <div className="link-p" aria-label="Article tags">
              {tItems(blog.tagsKey)
                .split("•")
                .map((tag) => (
                  <span className="tag" key={tag.trim()}>
                    {tag.trim()}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
