import React from "react"

import styles from "./contact-form.module.scss"

const ContactForm = () => <form name="contact" method="POST" data-netlify="true" className={styles.contactForm}>
  <div>
    <label for="email">Email</label><br />
    <input id="email" type="email" name="email" />
  </div>
  <div>
    <label for="message">Message</label><br />
    <textarea id="message"></textarea>
  </div>
  <button type="submit">Send</button>
</form>

export default ContactForm;