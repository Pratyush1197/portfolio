const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('./config');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const { axios } = require("axios");
var cors = require('cors')


const oauth2Client = new OAuth2(
  "436330047956-vb22u44419o03k9ga27l4qh1u8i3r7jr.apps.googleusercontent.com",
  "XiaR2h8jD7JPYLROj6JQye8H",
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token: "1//04fVIFFCdUghCCgYIARAAGAQSNwF-L9Irx9K5j9pnQQeZVByGH3VOuT1rxvChsMKffJYYjKs6hGSAAI5p0ad59Yz8o-uqrfgXniM"
});
const accessToken = oauth2Client.getAccessToken()
const transport = {
  service: 'gmail',
  port: 8080,
  auth: {
    type: "OAuth2",
    clientId: "436330047956-vb22u44419o03k9ga27l4qh1u8i3r7jr.apps.googleusercontent.com",
    clientSecret: "XiaR2h8jD7JPYLROj6JQye8H",
    refreshToken: "1//04fVIFFCdUghCCgYIARAAGAQSNwF-L9Irx9K5j9pnQQeZVByGH3VOuT1rxvChsMKffJYYjKs6hGSAAI5p0ad59Yz8o-uqrfgXniM",
    accessToken: accessToken,
    user: creds.USER,
    pass: creds.PASS
  }


}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


router.get('http://localhost:8080/sender/', (req, res, next) => {
 res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by"); 
var email = req.query.email
  var message = req.query.message
  var content = `email: ${email} \n message: ${message} `

 
 // Use this after the variable declaration
  
  const mail = {
    from: 'pratyushnarain97@gmail.com',
    to: creds.USER,  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
       msg: content.email
      })
    }
  })
});
module.exports = router;