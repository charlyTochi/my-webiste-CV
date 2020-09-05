import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import avatar1 from "./assets/img/avatars/myAvatar_1.png";
import avatar2 from "./assets/img/avatars/myAvatar_2.png";
import avatar3 from "./assets/img/avatars/myAvatar_3.png";
import avatar4 from "./assets/img/avatars/myAvatar_4.png";
import reactIcon from "./assets/img/icons/react.png";
import javaIcon from "./assets/img/icons/java.png";
import jsIcon from "./assets/img/icons/js.png";
import androidIcon from "./assets/img/icons/android.png";
import htmlIcon from "./assets/img/icons/html.png";
import gitIcon from "./assets/img/icons/git.png";
import firebaseIcon from "./assets/img/icons/firebase.png";
import php from "./assets/img/icons/php.png";
import cssIcon from "./assets/img/icons/css.png";
import facebookIcon from "./assets/img/icons/facebook.png";
import twitterIcon from "./assets/img/icons/twitter.png";
import linkedinIcon from "./assets/img/icons/linkedin.png";
import WorkHistory from './components/WorkHistory';
import FeaturedProjects from './components/FeaturedProjects';
import Typewriter from 'typewriter-effect/dist/core';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIcon: 0,
      stacks: [
        {
          name: "React JS & Native",
          icon: reactIcon,
          desc: "A friend introduced  this javascript frameworks to me and since then it has really made my programming life easier"
        },
        
        {
          name: "Node JS",
          icon: jsIcon,
          desc: "Understanding how this runtime environment works has improved the way i write API's, it rise in the programming sphere was jaw-dropping, and now it's taking over, if you ask me."
        },
        {
          name: "Android",
          icon: androidIcon,
          desc: "Building  android applications was a dream come through. I've always been inquisitive to know how the android apps on my mobile phone was built."
        },
        {
          name: "HTML 5",
          icon: htmlIcon,
          desc: "I remember the very first webpage I built back then... it wasn't the best but a good start and i was very happy to have managed to build a website."
        },
        {
          name: "Git Version Control",
          icon: gitIcon,
          desc: "During the early stages of my career, Version control seemed like a daunting concept, but after taking a course on it, it has since then become a part of me."
        },
        {
          name: "CSS",
          icon: cssIcon,
          desc: "I am all about the UI/UX of an app, and that would be incomplete without CSS. My exposure to it has drastically changed the entire look of my apps."
        },
        {
          name: "Firebase",
          icon: firebaseIcon,
          desc: "I love and mostly recommend this cloud service  because of its ease-of-use and efficiency"
        },
        {
          name: "PHP",
          icon: php,
          desc: "Back then as a beginner, Learning the procedural way of writing PHP massively improved my thinking ability."
        }
      ]
    }
  }

  componentDidMount() {
    this.loopIcons();
  }

  loopIcons() {
    const index = this.state.activeIcon;
    this.setState({ activeIcon: index })
    let stack = this.state.stacks[index];
    if (!stack) return;
    new Typewriter('#typewriter', {
      strings: stack.desc,
      autoStart: true,
    }).callFunction(() => {
      if (this.state.activeIcon > this.state.stacks.length) return;
      this.setState({ activeIcon: index + 1 }, () => this.loopIcons())
    });
  }

  render() {
    return (
      <div className="m-0">
        <section>
          <Row>
            <Col md={12} className="hero m-0 p-0">
              <Row className="overlay m-0">
                <Col md={5} className="h-100 p-5 justify-center" style={{ flexDirection: "column" }}>
                  <div>
                    <h3 className="white-text font-weight-light mb-0">Hi,<br />I am <br />Orafu Charles</h3>
                  </div>
                  <div className="py-2">
                    <p className="white-text fa-2x">and I&apos;m a software developer</p>
                    {this.state.stacks.map((stack, index) => (<img key={index} src={stack.icon} title={stack.name} alt={`${stack.name} icon`} className={`icon-image ${this.state.activeIcon == index && 'animated bounce infinite'}`} />))}
                  </div>
                </Col>
                <Col md={7} style={{ height: '100%' }} className="p-md-5 aligner-container">
                  <Card style={{ background: `rgba(66, 66, 66, 0.31)`, color: '#fff', width: '100%' }}>
                    <CardBody>
                      <CardHeader className="shadow-none border-0 fa-2x">
                        {this.state.activeIcon < this.state.stacks.length &&
                          <>
                            <img src={this.state.stacks[this.state.activeIcon].icon} className={`icon-image`} />
                            <span>{this.state.stacks[this.state.activeIcon].name}</span>
                          </>
                        }
                      </CardHeader>
                      <span id="typewriter" style={{ fontSize: 30 }}></span>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        <section className="py-5 align-center">
          <img src={avatar4} className="avatar-image" />
          <h3 className="white-text font-weight-bold my-4">Meet Orafu Charles</h3>
          <div className="paragraph white-text col-md-6 mx-auto">
            I am organized, confident, and dedicated individual who has very good communication
            skills and can easily adapt to situations, is excellent at decision making and performing tasks
            efficiently. All my life i've always wanted to proffer solutions to problems and i see problems as a motivation and strives to find lasting solutions.
          </div>
        </section>
        <section className="bg-dark-pattern-1 pt-5">
          <WorkHistory />
        </section>
        <section className="py-5 align-center hidden-sm">
          <img src={avatar1} className="avatar-image mt-3 mr-n3" style={{ width: 80, height: 80 }} />
          <img src={avatar3} className="avatar-image" style={{ zIndex: 3 }} />
          <img src={avatar2} className="avatar-image mt-3 ml-n3" style={{ width: 80, height: 80 }} />
          <h3 className="white-text font-weight-bold my-4">Here are some of my projects</h3>
          <FeaturedProjects />
        </section>
        <footer className="p-2 p-md-4 bg-grey-deep">
          <Row>
            <Col md={3} className="mx-auto align-center">
              <a href="https://www.facebook.com/profile.php?id=100007187708756" target="_blank"><img className="icon-image" src={facebookIcon} /></a>
              <a href="https://twitter.com/charlesorafu40" target="_blank"><img className="icon-image" src={twitterIcon} /></a>
              <a href="https://www.linkedin.com/in/orafu-charly-254511171/" target="_blank"><img className="icon-image" src={linkedinIcon} /></a>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mx-auto align-center py-md-4">
              <p className="white-text">Feel free to put a call through or send me a mail</p>
              <p className="m-0 white-text font-weight-bold">+234-703 289 0654</p>
              <p className="m-0 white-text font-weight-bold">+234-902 119 0528</p>
              <p className="m-0 white-text font-weight-bold">charlesorafu40@gmail.com</p>
            </Col>
          </Row>
        </footer>
      </div>
    );
  }
}

export default App;
