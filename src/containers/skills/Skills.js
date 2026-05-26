import React, {useContext} from "react";
import "./Skills.scss";
import {illustration, skillsSection, skillsSection1, skillsSection2, skillsSection3} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

// Komponen Pembantu Lokal untuk Memastikan Iconify Merender dengan Sempurna
function CustomSoftwareSkill({ logos }) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {logos.map((logo, i) => {
          return (
            <li key={i} className="software-skill-inline" name={logo.skillName}>
              {/* Mendukung pembacaan set ikon khusus dari iconify */}
              <span
                className="iconify"
                data-icon={logo.fontAwesomeClassname}
                style={{ fontSize: "50px" }}
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

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      
      {/* ==================== MAIN SKILL SECTION ==================== */}
      {skillsSection && skillsSection.display && (
        <div className="skills-main-div" style={{ marginBottom: "80px" }}>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                />
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
              <CustomSoftwareSkill logos={skillsSection.softwareSkills} />
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

      {/* ==================== SKILL SECTION 1 ==================== */}
      {skillsSection1 && skillsSection1.display && (
        <div className="skills-main-div" style={{ marginBottom: "80px" }}>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                />
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
              <CustomSoftwareSkill logos={skillsSection1.softwareSkills} />
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

      {/* ==================== SKILL SECTION 2 ==================== */}
      {skillsSection2 && skillsSection2.display && (
        <div className="skills-main-div" style={{ marginBottom: "80px" }}>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                />
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
              <CustomSoftwareSkill logos={skillsSection2.softwareSkills} />
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

      {/* ==================== SKILL SECTION 3 ==================== */}
      {skillsSection3 && skillsSection3.display && (
        <div className="skills-main-div" style={{ marginBottom: "80px" }}>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                />
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
              <CustomSoftwareSkill logos={skillsSection3.softwareSkills} />
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
