import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo";

import styles from "./header.module.scss"
import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import GithubIcon from "./icons/github";
import StackOverflowIcon from "./icons/stackoverflow";

const Header = () => (
  <header
    style={{
      backgroundColor: `#222`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `61.8vw`,
        paddingTop: `1em`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo />
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="">Blog</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="hire">Hire</Link></li>
        </ul>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/mcrenshaw10/">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/m4c9416">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/story/mac9416">
              <StackOverflowIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/mac9416">
              <GithubIcon />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
