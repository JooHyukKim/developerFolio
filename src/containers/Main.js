import React from "react";
import Header from "../components/header/Header";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import ProfessionalExp from "./professionalExp/ProfessionalExp"
import Top from "./topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";
import Contact from "./contact/Contact";
import { educationInfo, professionalProjectInfo } from "../portfolio"


const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <Contact />
        <Achievement /> {/* 자격증, 수료증*/} 
        <WorkExperience />{/*  */}
        <ProfessionalExp content={professionalProjectInfo} /> {/* 기업 프로젝트 경험 */}
        <Blogs /> {/* 개인프로젝트 경험*/}
        <ProfessionalExp content={educationInfo} /> {/* 교육*/}
        <Projects />
        {/* <Greeting />
        <Skills />
        <StackProgress />
        <Talks />
        <Twitter />
        <Podcast />
        <Profile /> */}
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Main;
