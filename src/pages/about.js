import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

import "../components/all.scss"
import styles from "../components/aboutStyles.module.scss"

const AboutPage = ({data}) => (
    <div >
        <SEO title="About" />

        <Header />

        <main className={styles.aboutWrapper}>
            <article className={styles.atariaDescription}>
    			<p className={styles.bioText}>
    				Ataria is an immersive VR and cinematic studio.
    				We produce 360 and 180 shorts and documentaries
    				in virtual reality, as well as feature films,
    				commercials and web content. Our VR180 work has
    				been featured on the Oculus store.
    			</p>
    		</article>

                <Img fluid={data.hannahImg.childImageSharp.fluid}
                    className={styles.hannahImage}
                    alt='Hannah!'/>

                <p className={styles.bioText + ' ' + styles.hannahBio}>
                    Hannah Swayze is a film and VR producer from Los Angeles,
                    California with a background in creating Chinese content.
                    Fluent in Mandarin, she's worked with the Guggenheim, Project
                    Projects,  John Yuyi, Sui He and others. Recently, her short
                    film she produced with Mike Fontaine ‘Häxan’ premiered at the
                    Sitges Film Festival in Barcelona. Currently she’s working on
                    independent VR and Film projects in New York City, Shanghai,
                    and LA.
                </p>

                <Img fluid={data.danielImg.childImageSharp.fluid}
                    className={styles.danielImage}
                    alt='Daniel!'/>

    			<p className={styles.danielBio + ' ' + styles.bioText}>
                    Daniel Contaldo is a cinematographer and VR producer from
                    Florence, Italy, currently based in NYC. He shoots narrative
                    and documentary work, as well as commercial projects in film
                    and VR with a range of clients including the NYTimes, Facebook,
                    McDonalds, and Unicef. He strives to shoot projects that advocate
                    a positive social impact and push the boundaries of art
                    and technology.
                </p>

        </main>
    </div>
)

export default AboutPage

export const pageQuery = graphql`
    query {
        danielImg: file(relativePath: { eq: "Daniel.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hannahImg: file(relativePath: { eq: "Hannah.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

    }
`;
