import React, { useContext } from "react";
import "./Skills.scss";
import { illustration, skillsSection, skillsSection1, skillsSection2, skillsSection3 } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import SkillProgress from "../skillProgress/skillProgress";

function RenderSoftwareSkills({ logos }) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {logos.map((logo, i) => (
          <li key={i} className="software-skill-inline" name={logo.skillName}>
            <span
              className="iconify"
              data-icon={logo.fontAwesomeClassname}
              data-inline="false"
            ></span>
            <p>{logo.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      
      {/* SECTION 1: FRONT END & ANDROID DEVELOPER */}
      {skillsSection && skillsSection.display && (
        <div className="skills-main-div">
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="Man Working" src={require("../../assets/images/developerActivity.svg")} />
              )}
            </div>
          </Fade>
          <Fade right duration={1000}>
            <div className="skills-text-div">
              <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
                {skillsSection.title}
              </h1>
              <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
                {skillsSection.subTitle}
              </p>
              <RenderSoftwareSkills logos={skillsSection.softwareSkills} />
              <div>
                {skillsSection.skills && skillsSection.skills.map((skills, i) => (
                  <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                    {skills}
                  </p>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      )}

      {/* SECTION 2: HOSPITALITY ADMINISTRATOR */}
      {skillsSection1 && skillsSection1.display && (
        <div className="skills-main-div">
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="Man Working" src={require("../../assets/images/developerActivity.svg")} />
              )}
            </div>
          </Fade>
          <Fade right duration={1000}>
            <div className="skills-text-div">
              <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
                {skillsSection1.title}
              </h1>
              <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
                {skillsSection1.subTitle}
              </p>
              <RenderSoftwareSkills logos={skillsSection1.softwareSkills} />
              <div>
                {skillsSection1.skills && skillsSection1.skills.map((skills, i) => (
                  <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                    {skills}
                  </p>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      )}

      {/* SECTION 3: SEO & WEB OPTIMIZATION */}
      {skillsSection2 && skillsSection2.display && (
        <div className="skills-main-div">
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="Man Working" src={require("../../assets/images/developerActivity.svg")} />
              )}
            </div>
          </Fade>
          <Fade right duration={1000}>
            <div className="skills-text-div">
              <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
                {skillsSection2.title}
              </h1>
              <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
                {skillsSection2.subTitle}
              </p>
              <RenderSoftwareSkills logos={skillsSection2.softwareSkills} />
              <div>
                {skillsSection2.skills && skillsSection2.skills.map((skills, i) => (
                  <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                    {skills}
                  </p>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      )}

      {/* SECTION 4: WEBSITE BUILDER */}
      {skillsSection3 && skillsSection3.display && (
        <div className="skills-main-div">
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="Man Working" src={require("../../assets/images/developerActivity.svg")} />
              )}
            </div>
          </Fade>
          <Fade right duration={1000}>
            <div className="skills-text-div">
              <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
                {skillsSection3.title}
              </h1>
              <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
                {skillsSection3.subTitle}
              </p>
              <RenderSoftwareSkills logos={skillsSection3.softwareSkills} />
              <div>
                {skillsSection3.skills && skillsSection3.skills.map((skills, i) => (
                  <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                    {skills}
                  </p>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      )}

      {/* PROFICIENCY PROGRESS BAR - HANYA SEKALI */}
      <SkillProgress />

    </div>
  );
}
