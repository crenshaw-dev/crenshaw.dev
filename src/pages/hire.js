import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quote from "../components/quote";

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

class HirePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stackoverflowscores: {}
    }
  }

  render() {
    return <Layout>
      <SEO title="Hire" />
      <h2>Hire me</h2>
      <p>I currently have a great job, but I'm always open to hearing about new opportunities.</p>
      <h3>References</h3>
      <Quote author="Christopher Wolfe, former supervisor">
        I was thoroughly impressed with his <strong>intellectual curiosity</strong> and <strong>amiable nature</strong>... 
        Michael showed a <strong>fearless tenacity</strong> in solving difficult technical problems.
      </Quote>
      <Quote author="Maria McNeely, former supervisor">
        ...<strong>articulate</strong>, <strong>determined</strong>, <strong>positive</strong> team member... a great 
        asset to my team, appreciated by his team members and loved by customers. His <strong>patience</strong>,{` `}
        <strong>creativity</strong> and <strong>can do attitude</strong> make him versatile in any environment.
      </Quote>
      <Quote author="Erica Wissolik, former supervisor">
        ...<strong>thorough</strong>, <strong>thoughtful</strong> and <strong>diligent</strong>... Michael was more than 
        capable and successfully managed to maneuver the landscape with a <strong>good sense of humor</strong>, and{` `}
        <strong>politeness</strong>.
      </Quote>
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
          <ul>
            <li>Pluralsight: 85th percentile</li>
            <li>LinkedIn: passed assessment</li>
            <li>Stackoverflow: {this.state.stackoverflowscores['c#']} answer score</li>
          </ul>
        </li>
        <li>
          T-SQL<br />
          <ul>
            <li>Pluralsight: 71st percentile</li>
          </ul>
        </li>
        <li>
          JavaScript<br />
          <ul>
            <li>Pluralsight: 77th percentile</li>
            <li>LinkedIn: passed assessment</li>
            <li>Stackoverflow: {this.state.stackoverflowscores['javascript']} answer score</li>
          </ul>
        </li>
        <li>
          ES6<br />
          <ul>
            <li>Pluralsight: 78th percentile</li>
          </ul>
        </li>
        <li>
          TypeScript<br />
          <ul>
            <li>Stackoverflow: {this.state.stackoverflowscores['typescript']} answer score</li>
          </ul>
        </li>
        <li>
          HTML<br />
          <ul>
            <li>Pluralsight: 92nd percentile</li>
            <li>Stackoverflow: {this.state.stackoverflowscores['html']} answer score</li>
          </ul>
        </li>
        <li>
          CSS<br />
          <ul>
            <li>Pluralsight: 66th percentile</li>
            <li>LinkedIn: passed assessment</li>
            <li>Stackoverflow: {this.state.stackoverflowscores['css']} answer score</li>
          </ul>
        </li>
        <li>SCSS</li>
        <li>
          Python<br />
          <ul>
            <li>Pluralsight: 86th percentile</li>
            <li>Stackoverflow: {this.state.stackoverflowscores['python']} answer score</li>
          </ul>
        </li>
        <li>Java</li>
        <li>
          PHP<br />
          <ul>
            <li>LinkedIn assessment: passed</li>
            <li>Stackoverflow: {this.state.stackoverflowscores['php']} answer score</li>
          </ul>
        </li>
        <li>
          ASP.NET<br />
          <ul>
            <li>Stackoverflow: {this.state.stackoverflowscores['asp.net']} answer score</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Visual Studio</li>
        <li>Team Foundation Server</li>
        <li>VS Code</li>
        <li>Git and Github</li>
      </ul>
    </Layout>
  }

  componentDidMount() {
    getStackOverflowAnswerScores().then((tags) => {
      console.log(tags)
      this.setState({stackoverflowscores: tags})
    })
  }
}

export default HirePage