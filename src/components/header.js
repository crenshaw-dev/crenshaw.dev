import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo";

const Header = ({ siteTitle }) => (
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
