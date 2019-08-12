import React from "react"

import styles from "./skill-badge.module.scss"

const SkillBadge = (props) =>
  <a className={styles.skillBadge} href={props.href} title={props.title}>
    <span className={styles.badgeIcon}>
      {props.icon}
    </span>
    <span className={styles.badgeCaption}>
      {props.children}
    </span>
  </a>

export default SkillBadge