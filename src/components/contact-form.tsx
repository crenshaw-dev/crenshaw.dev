import React from "react"

// @ts-ignore
import styles from "./contact-form.module.scss"

const ContactForm = () => <form name="contact" method="POST" data-netlify="true" className={styles.contactForm}>
  <div>
    <label htmlFor="email">Email</label><br />
    <input id="email" type="email" name="email" />
  </div>
  <div>
    <label htmlFor="message">Message</label><br />
    <textarea id="message"></textarea>
  </div>
  <button type="submit">Send</button>
</form>

export default ContactForm;