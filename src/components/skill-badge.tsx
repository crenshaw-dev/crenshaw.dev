import React from "react"

// @ts-ignore
import styles from "./skill-badge.module.scss"

const SkillBadge = (props: {href?: string; title?: string; icon: React.ReactNode; children: React.ReactNode}) =>
  <a className={styles.skillBadge} href={props.href} title={props.title}>
    <span className={styles.badgeIcon}>
      {props.icon}
    </span>
    <span className={styles.badgeCaption}>
      {props.children}
    </span>
  </a>

export default SkillBadge