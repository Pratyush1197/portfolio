import React, { Component } from 'react';
import posed, { PostGroup } from 'react-pose';
import './Bar.css'
import '../theme.css';



 class Bar extends React.Component {
  constructor(props){
      super(props);
      this.handlescroll = this.handlescroll.bind(this);
      this.state = { collapsed: true, isVisible: true};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlescroll)
}
componentDidunmount() {
   
    window.removeEventListener('scroll', this.handlescroll)
}
  handlescroll() {
    setTimeout(() => {
        this.setState({ collapsed: false, isVisible: !this.state.isVisible})

    },  100  );
    window.removeEventListener('scroll', this.handlescroll);
    setTimeout(() => {
        this.setState({ collapsed: false, isVisible: this.state.isVisible});
}, 100);
  }
  
  


    render() {
        const { collapsed } = this.state;
        const { isVisible } = this.state;
        const { hue, skills } = this.props;

        return (
        
            <div  id="app" className='container'>           
                <h1 className="a">Skills</h1>
                <br></br>
                <ul className="skills">
          {skills.map((skill, index) => 
            <li
              key={skill.type}
              className="tran"
              style={{ width: (isVisible ? 0: `${skill.level}%`)}}
            >
              <p>{skill.type}<span className="skillno">{ isVisible ? 0 : `${skill.level}%`}</span></p>
            </li>
          )}
        </ul>
       

 </div>
        )
    }
}
export default Bar;