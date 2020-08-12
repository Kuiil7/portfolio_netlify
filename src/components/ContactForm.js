import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  

 <div id="contact_form1">
<form name="contact" netlify data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>

  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
 
 </div>

)

export default ContactForm
