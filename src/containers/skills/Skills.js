import React, {useContext, useEffect} from "react";
import "./Skills.scss";
import {illustration, skillsSection, skillsSection1, skillsSection2, skillsSection3} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

// Fungsi lokal untuk merender Iconify secara langsung
function RenderIconifySkills({ logos }) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {logos.map((logo, i) => {
          return (
            <li key={i} className="software-skill-inline" name={logo.skillName}>
              <span
                className="iconify"
                data-icon={logo.fontAwesomeClassname}
                style={{ fontSize: "45px" }}
                data-inline="false"
              ></span>
              <p>{logo.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  // Memaksa Iconify melakukan re-scan DOM setelah komponen berhasil dimuat oleh React
  useEffect(() => {
    if (window.Iconify) {
      window.Iconify.scan();
    }
  }, []);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      
      {/* ==================== SECTION 0: FRONT END ==================== */}
      {skillsSection && skillsSection.display && (
        <div className="skills-main-div" style={{ marginBottom: "60px" }}>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="Working" src={require("../../assets/images/developerActivity.svg")} />
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
              <RenderIconifySkills logos={skillsSection.softwareSkills} />
              <div>
                {skillsSection.skills && skillsSection.skills.map((skills, i) => {
                  return (
                    <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                      {skills}
                    </p>
                  );
                })}
              </div>
            </div>
          </Fade>
        </div>
      )}

      {/* ==================== SECTION 1: HOSPITALITY ==================== */}
      {skillsSection1 && skillsSection1.display && (
        <div className="skills-main-div" style={{ marginBottom: "60px" }}>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="Working" src={require("../../assets/images/developerActivity.svg")} />
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
              <RenderIconifySkills logos={skillsSection1.softwareSkills} />
              <div>
                {skillsSection1.skills && skillsSection1.skills.map((skills, i) => {
                  return (
                    <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                      {skills}
                    </p>
                  );
                })}
              </div>
            </div>
          </Fade>
        </div>
      )}

      {/* ==================== SECTION 2: SEO ==================== */}
      {skillsSection2 && skillsSection2.display && (
        <div className="skills-main-div" style={{ marginBottom: "60px" }}>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="Working" src={require("../../assets/images/developerActivity.svg")} />
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
              <RenderIconifySkills logos={skillsSection2.softwareSkills} />
              <div>
                {skillsSection2.skills && skillsSection2.skills.map((skills, i) => {
                  return (
                    <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                      {skills}
                    </p>
                  );
                })}
              </div>
            </div>
          </Fade>
        </div>
      )}

      {/* ==================== SECTION 3: WEBSITE BUILDER ==================== */}
      {skillsSection3 && skillsSection3.display && (
        <div className="skills-main-div" style={{ marginBottom: "60px" }}>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="Working" src={require("../../assets/images/developerActivity.svg")} />
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
              <RenderIconifySkills logos={skillsSection3.softwareSkills} />
              <div>
                {skillsSection3.skills && skillsSection3.skills.map((skills, i) => {
                  return (
                    <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                      {skills}
                    </p>
                  );
                })}
              </div>
            </div>
          </Fade>
        </div>
      )}

    </div>
  );
}
