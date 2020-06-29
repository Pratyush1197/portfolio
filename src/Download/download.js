import React, { Component } from 'react';
import Pdf from '../Download/Pratyush_Narain_resume.pdf';
import './download.css';

class Download extends Component {

  render() {

    return (
      <button className="gradient-button gradient-button-4">
        <a href = {Pdf} target = "_blank">Download Pdf</a>
      </button>
    );
  }
}

export default Download;