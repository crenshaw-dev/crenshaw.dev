import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quote from "../components/quote";
import Skills from "../components/skills";

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
      <Skills />
    </Layout>
  }

  componentDidMount() {
    getStackOverflowAnswerScores().then((tags) => {
      this.setState({stackoverflowscores: tags})
    })
  }
}

export default HirePage