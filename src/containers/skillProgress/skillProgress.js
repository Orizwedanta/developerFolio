import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          
          {/* KOLOM KIRI: MENAMPUNG 3 KATEGORI PROGRESS BAR SECARA VERTIKAL */}
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>

            {/* KATEGORI 1: TOOLS & SAAS */}
            {techStack.toolsAndSaaS && (
              <div className="proficiency-category-block" style={{ marginBottom: "2.5rem" }}>
                <h3 className="category-sub-heading">🛠️ SaaS & Tech Tools</h3>
                {techStack.toolsAndSaaS.map((exp, i) => (
                  <div key={i} className="skill">
                    <p>{exp.Stack}</p>
                    <div className="meter">
                      <span style={{ width: exp.progressPercentage }}></span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* KATEGORI 2: DOMAIN EXPERTISE */}
            {techStack.domainExpertise && (
              <div className="proficiency-category-block" style={{ marginBottom: "2.5rem" }}>
                <h3 className="category-sub-heading">🌍 Domain Expertise</h3>
                {techStack.domainExpertise.map((exp, i) => (
                  <div key={i} className="skill">
                    <p>{exp.Stack}</p>
                    <div className="meter">
                      <span style={{ width: exp.progressPercentage }}></span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* KATEGORI 3: CORE SPECIFIC SKILLS */}
            {techStack.coreSpecificSkills && (
              <div className="proficiency-category-block">
                <h3 className="category-sub-heading">🎯 Core Specific Skills</h3>
                {techStack.coreSpecificSkills.map((exp, i) => (
                  <div key={i} className="skill">
                    <p>{exp.Stack}</p>
                    <div className="meter">
                      <span style={{ width: exp.progressPercentage }}></span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* KOLOM KANAN: TETAP AMAN MENAMPUNG ANIMASI LOTTIE */}
          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>

        </div>
      </Fade>
    );
  }
  return null;
}
