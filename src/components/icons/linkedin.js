import React from "react"

import styles from "./icons.module.scss"

const LinkedInIcon = () => 
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="LinkedIn" 
    role="img"
    viewBox="0 0 512 512"
    className={styles.icon}>
    <rect
      width="512" 
      height="512"
      rx="15%"
      className={styles.linkedinColor} />
    <circle className={styles.backgroundColor} cx="142" cy="138" r="37"/>
    <path className={styles.backgroundColor} strokeWidth="66" d="M244 194v198M142 194v198"/>
    <path className={styles.backgroundColor} d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"/>
  </svg>

export default LinkedInIcon