import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ProfessionalExp from "./professionalExp/ProfessionalExp"
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";
import Contact from "./contact/Contact";
import { educationInfo, professionalProjectInfo, personalProjectInfo } from "../portfolio"


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
