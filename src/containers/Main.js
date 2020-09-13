import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia('(prefers-color-scheme: dark)');
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  }

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null} >
      <StyleProvider value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }} >
            <div id={this.state.isDark ? "stars-dark" : "stars"}></div>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <WorkExperience />
            <Education />
            <Projects />
            <Achievement />
            <Profile />
            <Footer />
            <Top />
        </StyleProvider>
      </div>
    );
  }
}
