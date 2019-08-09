import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <form name="contact" method="POST" data-netlify="true">
        <label for="email">Email</label><br />
        <input id="email" type="email" name="email" /><br />
        <label for="message">Message</label><br />
        <textarea id="message"></textarea><br />
        <button type="submit">Send</button>
    </form>
  </Layout>
)

export default ContactPage