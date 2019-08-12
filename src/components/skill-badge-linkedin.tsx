import React from "react"
import LinkedInIcon from "./icons/linkedin"
import SkillBadge from "./skill-badge"

const SkillBadgeLinkedIn = () => 
  <SkillBadge 
    icon={<LinkedInIcon />}
    href={`https://www.linkedin.com/in/mcrenshaw10/`} 
    title={`My LinkedIn profile`}
  >
      passed assessment
  </SkillBadge>

export default SkillBadgeLinkedIn