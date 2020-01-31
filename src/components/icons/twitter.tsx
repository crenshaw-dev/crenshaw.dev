import React from "react"

// @ts-ignore
import styles from "./icons.module.scss"

const TwitterIcon = () => 
  <svg xmlns="http://www.w3.org/2000/svg"
    aria-label="Twitter" 
    role="img"
    viewBox="0 0 512 512"
    className={styles.icon}>
    <rect
      width="512" 
      height="512"
      rx="15%"
      className={styles.twitterColor} />
    <path className={styles.backgroundColor} d="M437 152a72 72 0 0 1-40 12 72 72 0 0 0 32-40 72 72 0 0 1-45 17 72 72 0 0 0-122 65 200 200 0 0 1-145-74 72 72 0 0 0 22 94 72 72 0 0 1-32-7 72 72 0 0 0 56 69 72 72 0 0 1-32 1 72 72 0 0 0 67 50 200 200 0 0 1-105 29 200 200 0 0 0 309-179 200 200 0 0 0 35-37"/>
  </svg>

export default TwitterIcon