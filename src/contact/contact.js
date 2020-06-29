import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';
import '../theme.css';
import '../contact/contact.css';
import axios from 'axios';
import swal from 'sweetalert';




 class Contact extends React.Component {
  constructor() {
      super()
      this.state={
          email: '',
          message:''

      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value})
  }
  handleSubmit = e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      if (email == ''){
        swal("", "Enter Details!", "warning");  
      }
      else{
        swal("Good job!", "Your Details are sent!!", "success");
      }
      console.log(email);
      

      axios({
        method: "POST", 
        url:"http://localhost:8080/sender/", 
        ciphers: 'DES-CBC3-SHA',
        crossdomain: true,
        
        data: {
            email: 'email',  
            message: 'message'
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert(response.data.email);
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
    document.getElementById('contact-form').reset();
}

      
  
  


    render() {
        
        return (
            
            <footer class="footer-distributed">
            
                        <div class="footer-left">
            
                            
                            
            
                            <div class="footer-icons">
            
                                <a ><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-github"></i></a>
            
                            </div>
            
                        </div>
                     <div class="footer-right">

				<p>Contact Us</p>

				<form method="POST"  onSubmit= {this.handleSubmit.bind(this)}>

					<input type="text" id="email" name="email" placeholder="Email"  />
					<input type="textarea" id="message" name="message" placeholder="Message"  />
				    <button type="submit">Send</button>

				</form>

			</div>   
            
                    </footer>
        )}
        }

export default Contact;