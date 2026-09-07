import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import "./Hero.css";

const skills = ["React.js", "Next.js", "TypeScript", "JavaScript",'Redux Toolkit','TanStack Query','Git / GitHub',"Tailwind CSS"];
const socialLinks = {
  github: "https://github.com/keto178",
  linkedin: "https://www.linkedin.com/in/kerolos-eid-70aa08388",
  email: "mailto:kerolos.eid159@gmail.com",
};

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <main id="home" className="hero">
      <div className="hero__inner">
        <section className="hero__content" aria-labelledby="hero-title">
          <p className="hero__eyebrow">{t("location")}</p>
          <h1 className="hero__title" id="hero-title">
            {t("name")} <em>{t("role")}<br />{t("roleLine2")}</em>
          </h1>
          <p className="hero__summary">
            {t("summary")}
          </p>
          <div className="hero__actions">
            <Link className="link" href="/Projects">{t("viewWork")}</Link>
            <Link className="link" href="/Contact">{t("workTogether")}</Link>

          </div>
          <div className="hero__skills" aria-label={t("coreSkills")}>
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <div className="hero__scroll-cue" aria-hidden="true">
            <span>↓</span>
          </div>
        </section>
        <div className="hero__visual">
          <div className="hero__ring" />
          <div className="hero__portrait">
            <Image src="/img.jpeg" alt="Kerolos Eid" width={900} height={1100} priority quality={90} sizes="(max-width: 540px) 82vw, (max-width: 860px) 58vw, 410px" />
          </div>
          <div className="hero__socials" aria-label={t("coreSkills")}>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label={t("githubLabel")}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.64-1.36-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.06a9.2 9.2 0 0 1 5 0c1.9-1.34 2.74-1.06 2.74-1.06.56 1.43.21 2.48.1 2.74.64.73 1.03 1.65 1.03 2.78 0 3.96-2.34 4.83-4.57 5.09.36.32.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label={t("linkedinLabel")}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55A.55.55 0 0 0 20.45 3ZM8.34 18.33H5.67V9.75h2.67v8.58ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.75h-2.67v-4.17c0-.99-.02-2.27-1.38-2.27-1.39 0-1.6 1.08-1.6 2.2v4.24h-2.67V9.75h2.56v1.17h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1v4.69Z" /></svg></a>
            <a href={socialLinks.email} aria-label={t("emailLabel")}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" /></svg></a>
          </div>
        </div>
      </div>
    </main>
  );
}
