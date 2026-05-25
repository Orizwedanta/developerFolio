import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection, skillsSection1, skillsSection2, skillsSection3} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  // Jika semua section dimatikan di portfolio.js, komponen tidak merender apa-content
  if (!skillsSection1.display && !skillsSection2.display && !skillsSection3.display) {
    return null;
  }

  // Kita buat fungsi pembantu (helper) agar tidak perlu menulis ulang kode HTML/JSX yang panjang
  const renderSkillSection = (sectionData) => {
    if (!sectionData || !sectionData.display) return null;

    return (
      <div className="skills-main-div" style={{ marginBottom: "50px" }}>
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
              {sectionData.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
              {sectionData.subTitle}
            </p>
            {/* Bagian ini akan otomatis menyesuaikan ikon software per kategori skill */}
            <SoftwareSkill logos={sectionData.softwareSkills} />
            <div>
              {sectionData.skills.map((skills, i) => {
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
    );
  };

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      {renderSkillSection(skillsSection1)}
      {renderSkillSection(skillsSection2)}
      {renderSkillSection(skillsSection3)}
    </div>
  );
}
