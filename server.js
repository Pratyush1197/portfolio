const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
var index = require('./routes/index');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('contact');
   });
   
   app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });
   app.use('/', index);
   app.post('/send', (req,res) => {
       console.log(req.body.name);
   })
   
   app.listen(process.env.PORT || 8080);