import "./ProfessionalExp.scss";
import ProfessionalExpCard from "../../components/professionalExpCard/ProfessionalExpCard";
import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";

export default function ProfessionalExp({content}) {

  const { isDark } = useContext(StyleContext);

  if (content.display) {
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
            {content.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {content.subTitle}
          </p>

        </div>
        <br />
        <div className="education-card-container">
          {content.schools.map((school, index) => (
            <ProfessionalExpCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
