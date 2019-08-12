import React from "react"

import SkillBadgeStackoverflow from "./skill-badge-stackoverflow";
import SkillBadgeLinkedIn from "./skill-badge-linkedin";
import SkillBadgePluralsight from "./skill-badge-pluralsight";

import styles from "./skills.module.scss"

function getStackOverflowAnswerScores() {
  return fetch('https://api.stackexchange.com/2.2/users/684776/top-answer-tags?site=stackoverflow')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const tags = json.items.reduce((acc, item) => {
        acc[item.tag_name] = item.answer_score
        return acc
      }, {})

      return tags
    })
}

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stackoverflowscores: {}
    }
  }

  render() {
    return <>
      <h3>Skills</h3>
      <ul>
        <li>Research</li>
        <li>Public speaking</li>
        <li>Abstract reasoning</li>
      </ul>
      <h3>Tools I've used</h3>
      <ul>
        <li>
          C#<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgePluralsight tag="C#" score={85} /></li>
            <li><SkillBadgeStackoverflow tag="c#" score={this.state.stackoverflowscores['c#']} /></li>
            <li><SkillBadgeLinkedIn /></li>
          </ul>
        </li>
        <li>
          T-SQL<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgePluralsight tag="T-SQL" score={71} /></li>
          </ul>
        </li>
        <li>
          JavaScript<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgePluralsight tag="JavaScript" score={77} /></li>
            <li><SkillBadgeStackoverflow tag="javascript" score={this.state.stackoverflowscores['javascript']} /></li>
            <li><SkillBadgeLinkedIn /></li>
          </ul>
        </li>
        <li>
          ES6<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgePluralsight tag="ES6" score={78} /></li>
          </ul>
        </li>
        <li>
          TypeScript<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgePluralsight tag="TypeScript" score={98} /></li>
            <li><SkillBadgeStackoverflow tag="typescript" score={this.state.stackoverflowscores['typescript']} /></li>
          </ul>
        </li>
        <li>
          HTML<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgePluralsight tag="HTML" score={92} /></li>
            <li><SkillBadgeStackoverflow tag="html" score={this.state.stackoverflowscores['html']} /></li>
          </ul>
        </li>
        <li>
          CSS<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgePluralsight tag="CSS" score={66} /></li>
            <li><SkillBadgeStackoverflow tag="css" score={this.state.stackoverflowscores['css']} /></li>
            <li><SkillBadgeLinkedIn /></li>
          </ul>
        </li>
        <li>Sass</li>
        <li>
          Python<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgePluralsight tag="Python" score={86} /></li>
            <li><SkillBadgeStackoverflow tag="python" score={this.state.stackoverflowscores['python']} /></li>
          </ul>
        </li>
        <li>Java</li>
        <li>
          PHP<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgeStackoverflow tag="php" score={this.state.stackoverflowscores['php']} /></li>
            <li><SkillBadgeLinkedIn /></li>
          </ul>
        </li>
        <li>
          ASP.NET<br />
          <ul className={styles.badgeList}>
            <li><SkillBadgeStackoverflow tag="asp.net" score={this.state.stackoverflowscores['asp.net']} /></li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Visual Studio</li>
        <li>Team Foundation Server</li>
        <li>VS Code</li>
        <li>Git and Github</li>
      </ul>
    </>
  }

  componentDidMount() {
    getStackOverflowAnswerScores().then((tags) => {
      this.setState({stackoverflowscores: tags})
    })
  }
}  

export default Skills