import "./projects-page.css";
import Image from "next/image";
import { projects } from "@/data/projects";
import { getTranslations } from "next-intl/server";

export default async function Projects() {
  const t = await getTranslations("Projects");
  const tItems = await getTranslations("ProjectItems");

  const skills = [
    t("filterAll"),
    t("filterFrontend"),
    t("filterReact"),
    t("filterNextjs"),
    t("filterJavascript"),
  ];

  const projectTranslations = [
    {
      titleKey: "project1Title",
      descKey: "project1Desc",
    },
    {
      titleKey: "project2Title",
      descKey: "project2Desc",
    },
    {
      titleKey: "project3Title",
      descKey: "project3Desc",
    },
  ];

  return (
    <div className="continer projects-page">
      <div className="item1">
        <p>{t("portfolio")}</p>
        <h2>{t("heading")}</h2>
        <div className="skils-p">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
      <div className="item2">
        <div className="continer">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="card"
                key={`${project.title}-${index}`}
              >
                <Image
                  src={project.image}
                  alt={tItems(projectTranslations[index]?.titleKey || "project1Title")}
                  width={350}
                  height={200}
                  className="project-img"
                />
                <div className="card-content">
                  <h5>
                    {tItems(
                      projectTranslations[index]?.titleKey || "project1Title"
                    )}
                  </h5>
                  <p>
                    {tItems(
                      projectTranslations[index]?.descKey || "project1Desc"
                    )}
                  </p>
                  <div className="tech">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="buttons">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("liveDemoLabel")}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("githubLabel")}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
