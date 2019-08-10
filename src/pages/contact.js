import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Contact me</h2>
    <p>I'd love to hear from you! Send me a message, and I'll try my best to respond within 24 hours.</p>
    <ContactForm />
  </Layout>
)

export default ContactPage