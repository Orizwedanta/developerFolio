import React, {useContext} from "react";
import "./Skills.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Progress() {
  const {isDark} = useContext(StyleContext);

  if (!techStack.viewSkillBars) {
    return null;
  }

  // Fungsi pembantu untuk merender progress bar secara bersih
  const renderBars = (skillsArray) => {
    return skillsArray.map((skill, i) => (
      <div key={i} className="progress-bar-container">
        <p className={isDark ? "dark-mode progress-bar-text" : "progress-bar-text"}>
          {skill.Stack}
        </p>
        <div className="progress">
          <div
            className="progress-bar-fill"
            style={{ width: skill.progressPercentage }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <Fade right duration={1000}>
      <div className="skills-container">
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          Proficiency
        </h1>
        
        <div className="proficiency-sections-grid">
          {/* VARIABEL 1: TOOLS & SAAS */}
          {techStack.toolsAndSaaS && (
            <div className="proficiency-block">
              <h3 className={isDark ? "dark-mode proficiency-sub" : "proficiency-sub"}>
                🛠️ SaaS & Tech Tools
              </h3>
              {renderBars(techStack.toolsAndSaaS)}
            </div>
          )}

          {/* VARIABEL 2: DOMAIN EXPERTISE */}
          {techStack.domainExpertise && (
            <div className="proficiency-block">
              <h3 className={isDark ? "dark-mode proficiency-sub" : "proficiency-sub"}>
                🌍 Domain Expertise
              </h3>
              {renderBars(techStack.domainExpertise)}
            </div>
          )}

          {/* VARIABEL 3: CORE SPECIFIC SKILLS */}
          {techStack.coreSpecificSkills && (
            <div className="proficiency-block">
              <h3 className={isDark ? "dark-mode proficiency-sub" : "proficiency-sub"}>
                🎯 Core Specific Skills
              </h3>
              {renderBars(techStack.coreSpecificSkills)}
            </div>
          )}
        </div>

      </div>
    </Fade>
  );
}
