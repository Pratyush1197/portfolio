import React, { Component } from 'react';
import "animate.css/animate.min.css";
import "../Projects/projects.scss";
import 'font-awesome/css/font-awesome.min.css';
import { FaJs, FaPython ,FaGithub,FaLinkedin, FaFacebook, FaMedium} from 'react-icons/fa';
import {  } from '@fortawesome/fontawesome-free-solid'
import { color } from 'style-value-types';
import js from './svg/js.svg'

class Article extends Component
  {
    render() {
      const details = this.props.details,
      
          styles = {
            backgroundColor: '#000000'
          };
      
      return (
        <a href={details.link}>
        <article className="article">
        
          <h3 className="article__title">{details.title}</h3>
          <p className="article__excerpt">{details.excerpt}</p>
          <FaJs style={{ visibility: details.icons == 'js'? "visible" : "hidden",position: "absolute",color: '#000000'  }} size='40px' />
          <FaPython style={{visibility: details.icons == 'python'? "visible" : "hidden",color: '#000000'}} size='40px' />
      
          
      
        </article>
      </a>
      )
    }
  };
  
 export default Article;