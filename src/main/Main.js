import React, { Component } from 'react';
import "animate.css/animate.min.css";
import "./Main.css";
import { FaGithub,FaJs, FaFacebook, FaMedium, FaHackerrank, FaLinkedin} from 'react-icons/fa';
import "hover.css";


export default class Main extends Component {
    constructor() {
        super();{
        this.state = {};
    

  }
}
    render() {
        return (
            
            
            <div className="main">
                
             
            <h1>Pratyush Narain</h1>
            <div className="icons">
            <h2  onClick={()=> window.open("https://github.com/Pratyush1197", "_blank")}  className="github hvr-grow"><FaGithub /></h2>
            <h2  onClick={()=> window.open("https://www.hackerrank.com/pratyushnarain97", "_blank")}className="link hvr-grow"><FaHackerrank /></h2>
            <h2   onClick={()=> window.open(" https://www.linkedin.com/in/pratyush-narain-a58aaa125", "_blank")}className="fb hvr-grow"><FaLinkedin /></h2>
            <h2    onClick={()=> window.open("https://medium.com/@pratyushnarain", "_blank")} className="Medium hvr-grow"><FaMedium /></h2>
            
            </div>
           
            </div>
        
           
        )
    }
}
