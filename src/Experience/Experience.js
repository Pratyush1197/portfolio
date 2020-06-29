import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './exp.css';
class Experience extends Component
  {
    render() {
      const details = this.props.details,
          styles = {
            backgroundColor: '#000000'
          };
      
      return (

       <div className="Exp">
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="May-September'19"
            
            style={{ color: '#e86971',align: 'center' }}
          >
            <h3 className="text">Indian Institute of Information Technology, Hyderabad</h3>
            <h4 className="text">Open Source Software Developer</h4>
            <p className="text">
              Intern for Student Remote Internship Program at IIIT Hyderabad and 
              Worked on different projects like-<br></br>
              <b className="text">Digital Logic Design Simulator</b >- A digital logic circuit simulator which is designed with GoJs library and Vanilla Javascript. It consist of logic gates (AND,
OR,NOT,NOR,NAND,XOR and XNOR), Multiplexar fully operable with
value given from input port and recorded at output port.

            </p>
            <p className="text">
             Manual speech signal to symbol transformation- The main objective of this project was to recognize the different aspects
             of speech signal transformation like phonones syllables etc. I  used Wavesurfer.js library for the representation of audio file in the form of
             waveform and some other libraries and technologies for separating ohonones and syllables from the sample audio wave.
             Text Translator is also embedded in the web application for the Translation from one language to another. It is based on Yandex api.    

            </p>
            <p className="text">
            The objective of this Project was to provide hands on experience in processing 
            speech signals for extraction of information for various applications. 
            In this we learned to process different audio samples,
            change their frequency andsamples/bits and listen to the processed speech to get a 
            feel for effects of various signal processing operations on speech signals.


            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="November'18-March'19"
            dateInnerStyle={{ background: '#61b8ff' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Open Source Contributer</h3>
            <br></br>
            <h4 style={{ color: '#61b8ff' }}>Bootstrap Italia</h4>
            <p>
              
            I have worked for the design react kit repository of bootstrap italia where I built react components added
            new features for the existing components and fixed some bugs as well
            </p>
            <br></br>
            <h4 style={{ color: '#61b8ff' }}>OpenLibrary</h4>
            
            <p>
            Fixed bugs and improved the design of frontend as 
            well as suggested new features for organising the backend data
            </p>
            <br></br>
            <h4 style={{ color: '#61b8ff' }}>OpenLibrary</h4>
            <p>
            Worked as an open source Contributer in Rocket.chat, 
            A team chat desktop application based on electron.js. 
            Fixed the UI and suggested project ideas.
            </p>

          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="May-August'18"
          
            dateInnerStyle={{ background: '#775e94', left: "10px;"}}
            >
            
          
            <h3 className="text">Awaaz NGO</h3>
            <h4 className="text">Graphic Designer</h4>
            <br></br>
            <p className="text">
              Worked as a graphic design intern in Awaaz NGO where I made Daily posters for social media, flyers,
              brochures, logos etc  
            </p>
       
          </TimelineItem>

        </Timeline>
        </div>
      )
    }
  };
  
 export default Experience;