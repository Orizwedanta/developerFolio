import React, {useContext} from "react";
import "./Skills.scss";
import {
  skillsSection,
  skillsSection1,
  skillsSection2,
  skillsSection3
} from "../../portfolio";
import {Fade} from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import codingPerson from "../../assets/lottie/codingPerson";
import StyleContext from "../../contexts/StyleContext";

// Import komponen progress bar 3 kategori (Pastikan namanya sesuai di foldermu)
/*import StackProgress from "./StackProgress";*/ 

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  // Helper function untuk merender layout baris section skill secara konsisten
  const renderSkillRow = (sectionData) => {
    if (!sectionData.display) return null;

    return (
      <div className="skills-container">
        <div className="skills-image">
          <DisplayLottie animationData={codingPerson} />
        </div>
        <div className="skills-bar">
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {sectionData.title}
          </h1>
          <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
            {sectionData.subTitle}
          </p>
          <SoftwareSkill logos={sectionData.softwareSkills} />
          <div className="skills-list-lines">
            {sectionData.skills.map((skill, index) => (
              <p
                key={index}
                className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="skills">
      <Fade bottom duration={1000} distance="20px">
        {/* MERENDER 4 SECTION DI RESUME SECARA BERURUTAN */}
        {renderSkillRow(skillsSection)}
        {renderSkillRow(skillsSection1)}
        {renderSkillRow(skillsSection2)}
        {renderSkillRow(skillsSection3)}

        {/* SECTION PROFICIENCY HANYA DIPANGGIL SEKALI DI SINI */}
        <StackProgress />
      </Fade>
    </div>
  );
}
