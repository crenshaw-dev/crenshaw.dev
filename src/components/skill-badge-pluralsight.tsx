import React from "react"
import SkillBadge from "./skill-badge"
import PluralsightIcon from "./icons/pluralsight";

// https://stackoverflow.com/a/13627586/684776
function ordinalSuffixOf(i: number) {
  const j = i % 10;
  const k = i % 100;

  if (j === 1 && k !== 11) {
    return i + "st";
  }

  if (j === 2 && k !== 12) {
    return i + "nd";
  }

  if (j === 3 && k !== 13) {
    return i + "rd";
  }

  return i + "th";
}

const SkillBadgePluralsight = (props: {tag: string; score: number}) => 
  <SkillBadge 
    icon={<PluralsightIcon />} 
    href={`https://app.pluralsight.com/profile/michael-crenshawea`} 
    title={`My ${props.tag} assessment on Pluralsight`}
  >
    {ordinalSuffixOf(props.score)} percentile
  </SkillBadge>

export default SkillBadgePluralsight