import React from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './Start'
import Header from "./Header/Header";
import Projects from "./Projects/Projects"
import Main from './main/Main';
import About from './about/About';
import Cursor from './cursor/cursor';
import Cursor1 from './cursor/cursor1';
import Experience from './Experience/Experience';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './theme.css';
import Download from './Download/download';
import "animate.css/animate.min.css";
import Bar from "./Bar/Bar";
import ScrollAnimation from 'react-animate-on-scroll';
import ReactWOW from 'react-wow'
import Contact from './contact/contact';


const SKILLS = [
  {type: "Data Structures and Algorithms", level: 88},
  {type: "Javascript", level: 92},
  {type: "React.js", level: 87},
  {type: "Python", level: 92},
  {type: "Express.js", level: 86},
  {type: "Photoshop", level: 80},
  {type: "Database", level: 50},
  {type: "API", level: 74},
  {type: "Git", level: 78},
  {type: "Postman", level: 80}
];
export default class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      arr: ["light", "dark", "blue",  "grey", "lightblue"],
      index: 1,
      theme: "light",
    };
    this.scrollToTop = this.scrollToTop.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
    toggleTheme() {
      let i = this.state.index < this.state.arr.length ? this.state.index += 1 : this.state.index -= (this.state.arr.length-1);
        {
          this.state.arr.slice(0, i).map(theme => {
      document.documentElement.classList.add("color-theme-in-transition");
      this.setState({ theme });
      document.documentElement.setAttribute("data-theme", theme);
      window.setTimeout(() => {
        document.documentElement.classList.remove("color-theme-in-transition");
      }, 500);
    })
  }}
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
   render(){
  return (
    
    <div className="App">
   
     <Header  toggleTheme={this.toggleTheme} />
     
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <Start />
      <Main />
  
      <Link activeClass="active" to="test1" className="test1" spy={true} smooth={true} duration={1000} ><Cursor/></Link>
     <Element name="test1"></Element>
     
     <Experience />
     <Link activeClass="active" to="test1" className="test2" spy={true} smooth={true} duration={1000} ><Cursor1 /></Link>
    
      <Bar color="#fff" skills={SKILLS} />
      <Element name="test2"></Element>
      <Projects />
      
         <Start />
          <Start />
          <Download />
          
          <Contact  />
          
        
    </div>
  );

  }
}
