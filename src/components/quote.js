import React from "react"

import styles from "./quote.module.scss"

const Quote = ({ author, children }) => <figure className={styles.quoteBlock}>
  <blockquote cite="https://www.linkedin.com/in/mcrenshaw10/">
    {children}
  </blockquote>
  <figcaption>— {author}</figcaption>
</figure>

export default Quote