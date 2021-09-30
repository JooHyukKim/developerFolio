import React from "react";
import "./ExtraWorkExperienceCard.scss";

export default function ExtraWorkExperienceCard({ cardInfo, isDark }) {
  const GetDescBullets = ({ descBullets, isDark }) => {
    console.log('this is desc boullets');
    console.log(descBullets);
    return descBullets
      ? descBullets.map((item, i) => (
        <li
          key={i}
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
        >
          {item}
        </li>
      ))
      : null;
  };
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.role}
        </h5>
        <h4 className={isDark ? "dark-mode card-title-second" : "card-title-second"}>
          {cardInfo.title + " - " + cardInfo.desc}
        </h4>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.date}
        </p>
      </div>
      <div className="certificate-card-footer">
      <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
