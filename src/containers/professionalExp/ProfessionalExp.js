import "./ProfessionalExp.scss";
import ProfessionalExpCard from "../../components/professionalExpCard/ProfessionalExpCard";
import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import { professionalExperienceInfo } from "../../portfolio"

export default function ProfessionalExp() {

  const { isDark } = useContext(StyleContext);

  if (professionalExperienceInfo.display) {
    return (
      <div className="education-section" id="education">
        <div className="achievement-header">
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {professionalExperienceInfo.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {professionalExperienceInfo.subTitle}
          </p>

        </div>
        <br />
        <div className="education-card-container">
          {professionalExperienceInfo.schools.map((school, index) => (
            <ProfessionalExpCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
