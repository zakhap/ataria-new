import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/all.scss"
import styles from "../components/indexStyles.module.scss"

import logo from "../images/ataria-lower-2.svg"
import basquiat from "../images/basquiat.svg"

const IndexPage = ({data}) => (
    <div className={styles.homepage}>
        <SEO title="Home" />

        <main className={styles.main}>
            <section className={styles.logo}>
                <img src={logo} />
            </section>

            <section className={styles.nav}>
                <ul className={styles.ul}>
                    <li> <Link to="/about/"> <h1> ABOUT </h1> </Link> </li>
                    <li> <Link to="/film/"> <h1> FILM </h1> </Link> </li>
                    <li> <Link to="/vr/"> <h1> VR </h1> </Link> </li>
                    <li> <Link to="/commercial/"> <h1> COMMERCIAL </h1> </Link> </li>
                </ul>
            </section>

            <section className={styles.copy}>
                <p className={styles.tagline} >*an immersive VR and Cinematic Studio</p>
                <p>We produce 360 and 180 shorts and <br /> documentaries in virtual
                    reality, as well as feature films, commercials and web
                    content.
                </p>
            </section>
        </main>
        <figure className={styles.figure}>
            <img className={styles.basquiat} src={basquiat}/>
        </figure>
    </div>
)

export default IndexPage
