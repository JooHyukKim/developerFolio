import React, {useContext} from "react";
import "./ExtraWorkExperience.scss";
import ExtraWorkExperienceCard from "../../components/extraWorkExperienceCard/ExtraWorkExperienceCard";
import {extraWorkExperience} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ExtraWorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!extraWorkExperience.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {extraWorkExperience.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {extraWorkExperience.subtitle}
            </p>
            
          </div>
          <div className="achievement-cards-div">
            {extraWorkExperience.experience.map((card, i) => {
              return (
                <ExtraWorkExperienceCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    role : card.role,
                    title : card.title,
                    date : card.date,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink,
                    desc : card.desc,
                    descBullets : card.descBullets
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
