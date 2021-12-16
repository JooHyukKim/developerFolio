import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";


export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.phone_number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.residency}
              </a>
              <br />
              <br />
              <SocialMedia />
              <div className="button-greeting-div">
                              <Button text="이력서" href="https://docs.google.com/document/d/1OeJP7RhD9u1bzUGLWSHFi1HD5pL1n8QSvSIB6z9pCTI/edit?usp=sharing" />
                              <Button text="포트폴리오" href="https://docs.google.com/document/d/10prG5f1LrxifDBfC3WVUPRkd9Wxp7f_o1rI2wI3GJLg/edit?usp=sharing" />
                              <Button text="자기소개서" href="https://docs.google.com/document/d/1aTVOMmwIqi5GaH6Nfky9eoHT5GVkqkj9o39XDIxIPfc/edit?usp=sharing" />
                            </div>
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
