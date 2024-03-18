// ContactPage.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5szybgo', 'template_sx7khen', form.current, {
        publicKey: 'JJYc1NAubBU2KSLmz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <table>
        <tr>
          <td>
            <label>Name</label> 
            </td>
            <td><input type="text" name="user_name" /></td>
            </tr>
       <tr>
      <td>
        <label>Email</label>  </td>
        <td><input type="email" name="user_email" /></td>
      </tr>
      <tr>
      <td><label>Message</label> </td><td><textarea name="message" /></td>
      </tr>
      <br/><br/>
      <input type="submit" value="Send" />
      </table>
    </form>
  );
};
export default ContactUs;