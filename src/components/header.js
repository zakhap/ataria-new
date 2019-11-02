import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./headerStyles.module.scss"

import logo from "../images/ataria-lower-2.svg"


const Header = () => (
  <header>
        <Link to="/"
            className={styles.logo}>
          <img src={logo}
               alt='logo' />
        </Link>
    	<ul className={styles.menuItems}>
    		<li><Link to="/about"><h1>ABOUT</h1></Link></li>
    		<li><Link to="/film/"><h1>FILM</h1></Link></li>
    		<li><Link to="/vr/"><h1>VR</h1></Link></li>
    		<li><Link to="/commercial/"><h1>COMMERCIAL</h1></Link></li>
    	</ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
