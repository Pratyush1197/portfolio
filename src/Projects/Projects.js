import React, { Component } from 'react';
import "animate.css/animate.min.css";
import "../Projects/projects.scss";
import Article from './Article';
import { FaGithub,FaJs, FaFacebook, FaMedium} from 'react-icons/fa'


class Projects extends Component {
  constructor(props) {
    super(props)
      
    this.state = {
      articles: {
        'article': {
          "color": "FEC006",
          "title": "Task-Manager",
          "thumbnail": "",
          "link": "https://github.com/Pratyush1197/TaskManager",
          "icons": "js",
          "category": "Web Application",
          "excerpt": "A fullstack app using React.js, react hooks, firebase and express.js for feeding api, with advanced features and functionality",
          "date": new Date()
        },
        'article-1': {
          "color": "2196F3",
          "title": "COVID19 data API using web-scraping",
          "thumbnail": "",
          "icons": "js",
          "link": "https://github.com/Pratyush1197/Covid19-India-API",
          "category": "News",
          "excerpt": "API which fetches data from MOHFW website using cheerio.js and gets the total cases from different States.",
          "date": new Date()
        },
        'article-2': {
          "color": "FE5621",
          "title": "WordCloud Generator Desktop App",
          "link": "https://github.com/Pratyush1197/Python_WordCloud",
          "thumbnail": "",
          "icons": "python",
          "category": "News",
          "excerpt": "Desktop App developed using Electron.js and Python to convert image to wordcloud",
          "date": new Date()
        },
        'article-3': {
          "color": "673AB7",
          "title": "GSOC Leaderboard using Github api",
          "thumbnail": "",
          "link": "https://github.com/Pratyush1197/Leaderboard",
          "icons": "js",
          "category": "News",
          "excerpt": "An automated tool to Calculate Pull requests by a user for any particular open source organization",
          "date": new Date()
        },
        'article-4': {
          "color": "FEC006",
          "title": "A Javascript based digital logic circuit simulator",
          "thumbnail": "",
          "link": "https://github.com/Pratyush1197/Pratyush1197.github.io",
          "icons": "js",
          "category": "Web Application",
          "excerpt": "A digital logic circuit simulator which is made with GoJs library and Vanilla Javascript.",
          "date": new Date()
        },
        'article-5': {
          "color": "2196F3",
          "title": "Jukebox-with-Audio-visualization",
          "thumbnail": "",
          "link": "https://github.com/Pratyush1197/Jukebox-with-Audio-visualization",
          "category": "News",
          "icons": "js",
          "excerpt": "Jukebox which displays circular visualizations on screen. It uses Express.js for the server side scripting.",
          "date": new Date()
        },
        'article-6': {
          "color": "FE5621",
          "title": "Authentication Using Django App",
          "link": "https://github.com/Pratyush1197/Authentication-using-django",
          "thumbnail": "",
          "category": "News",
          "icons": "python",
          "excerpt": "Developed a code which Provides authentication to users via a token generated. .",
          "date": new Date()
        },
        'article-7': {
          "color": "673AB7",
          "title": "Calender to display your schedule of the day",
          "link": "https://googlecalendar.herokuapp.com",
          "thumbnail": "",
          "category": "News",
          "icons": "js",
          "excerpt": "A Calendar app which sync with your Google calendar and display your daily schedule",
          "date": new Date()
        }
      }
    }
    this.renderArticle = this.renderArticle.bind(this);
  }
  renderArticle(key) {
    return (
      <div className="column">
        <Article key={key} index={key} details={this.state.articles[key]} />
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          {Object.keys(this.state.articles).map(this.renderArticle)}
        </div>
      </div>
    )
  }
};

 export default Projects;