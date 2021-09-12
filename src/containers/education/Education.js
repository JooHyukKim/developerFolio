import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import { educationInfo } from "../../portfolio"

export default function Education() {

  const { isDark } = useContext(StyleContext);

  if (educationInfo.display) {
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
            {educationInfo.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {educationInfo.subTitle}
          </p>

        </div>
        <br />
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
