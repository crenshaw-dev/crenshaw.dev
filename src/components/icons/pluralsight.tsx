import React from "react"

// @ts-ignore
import styles from "./icons.module.scss"

const PluralsightIcon = () => 
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    aria-label="Pluralsight" 
    role="img"
    viewBox="0 0 512 512"
    className={styles.icon}
  >
    <defs>
      <linearGradient id="pluralsight-gradient" x2="0" y2="1">
        <stop offset="0%" stopColor="#f14624" />
        <stop offset="100%" stopColor="#ea038c" />
      </linearGradient>
    </defs>
    <rect
      width="512" 
      height="512"
      rx="15%"
      className={styles.pluralsightColor} />
    <path className={styles.backgroundColor} d="M203.4 149.6v212.8L387.7 256zM221 180L352.4 256 221 331.9V180"/>
    <path className={styles.backgroundColor} d="M161 172.8v166.4L305 256zm17.6 30.6l91.2 52.6-91.2 52.6V203.4"/>
  </svg>

export default PluralsightIcon