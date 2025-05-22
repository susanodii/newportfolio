import React, { useContext } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";
import { ThemeManager } from "../../context/ThemeTypes";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeManager);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rztf7qn",
        "contact_form",
        form.current,
        "ejvaA1vih2eae5pc4"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Unable to send message: ");
        }
      );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options-container'>
          <article
            className={
              isDarkMode ? "contact__option" : "contact__option__light"
            }
          >
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>susanodii@gmail.com</h5>
            <a href='mailto:gbengaakinnukawe@gmail.com' target='blank'>
              Send a message
            </a>
          </article>
          {/* <article
            className={
              isDarkMode ? "contact__option" : "contact__option__light"
            }
          >
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2347068470677</h5>
            <a
              href='https://wa.me/2347032352156?text=Hello%2C%20thanks%20for%20contacting%20us.%20We%20are%20available%20to%20get%20on%20your%20next%20web%20and%20mobile%20application%20project.'
              target='blank'
            >
              Send a message
            </a>
          </article> */}
          <article
            className={
              isDarkMode ? "contact__option" : "contact__option__light"
            }
          >
            <AiOutlineTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>Susan Odii</h5>
            <a href='https://twitter.com/Emiloluwa' target='blank'>
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            placeholder='Your Full Name'
            required
            style={{ color: !isDarkMode && "black" }}
          />
          <input
            type='email'
            name='user_email'
            placeholder='Your Email'
            required
            style={{ color: !isDarkMode && "black" }}
          />
          <textarea
            name='message'
            placeholder='Your Message'
            rows='7'
            style={{ color: !isDarkMode && "black" }}
          ></textarea>
          <button
            type='submit'
            className={
              isDarkMode
                ? "btn btn-primary"
                : " btn__light btn-primary btn_light"
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
