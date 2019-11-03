import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Header from "../components/header"

import "../components/all.scss"
import styles from "../components/vrStyles.module.scss"

const VrPage = ({data}) => (
    <Layout>
        <SEO title="VR" />

        <main className={styles.wrapper}>
            <section className={styles.headVR}>
                <h1 className={styles.headTitleVR + ' ' + styles.h1v}><span>V R - E X P E R I E N C E S</span></h1>
            </section>

            <section className={styles.lucidita}>
                <h1 className={styles.lTitle + ' ' + styles.h1v}>Lucidità</h1>
        		<p className={styles.pv + ' ' + styles.lDesc}>A 3D VR 180 Horror film set in Italy</p>
                <Img fluid={data.Horror_1.childImageSharp.fluid} critical="true" className={styles.l1} />
				<Img fluid={data.Horror_2.childImageSharp.fluid} className={styles.l2} />
            </section>

            <section className={styles.comeIntoMe}>
                <h1 className={styles.cimTitle  + ' ' + styles.h1v}>Come Into Me</h1>
                <p className={styles.cimDesc + ' ' + styles.pv}>
                    A 3D VR 180 narrative film about human trafficking in New York City.
                    A trafficked girl, a sex client, and a pimp are trapped in
                    their circumstances in New York (2018). Directed by
                    Aleszea Blanche Germann. Presented at the <a href="https://www.efm-berlinale.de/en/screenings/vr-screenings/vr-screenings.html#!/accordion1100334=accordion-item-start-module-9">
                    Berlinale EFM Market Screenings</a>. Screened at the <a href="https://www.eyefilm.nl/en/festivals/imagine-film-festival-2">EYE Museum in Amsterdam</a>,
                    as part of the <a href="https://imaginefilmfestival.nl/en/programma/item/vr-programma-6-trading-places/">Imagine Fantastic Film Festival</a>.
                    </p>
                <Img fluid={data.comeintome1.childImageSharp.fluid} className={styles.cim1} />
				<Img fluid={data.comeintome2.childImageSharp.fluid} className={styles.cim2} />
            </section>

            <section className={styles.clown}>
                <h1 className={styles.cTitle + ' ' + styles.h1v}>Birthday Wish</h1>
                <p className={styles.cDesc + ' ' + styles.pv}>A 3D VR180 short film. A film producer's disappointing birthday party is interrupted by rowdy clowns</p>
                <Img fluid={data.clowns.childImageSharp.fluid} className={styles.c1} />
            </section>

            <section className={styles.landRover}>
                <h1 className={styles.lrTitle + ' ' + styles.h1v }> Land Rover–Uncharted Discoveries </h1>
        		<p className={styles.lrDesc + ' ' + styles.pv }> A NYTimes T-brand Studio</p>
    			<iframe
                    title="iFrame Video"
        			src="https://www.youtube.com/embed/bUfBOQ1YX-o"
        			frameborder="0"
                    className={styles.lrMovie}
                    width="600px"
                    height="300px"
        			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        			allowfullscreen>
				</iframe>
            </section>
        </main>
    </Layout>
)

export default VrPage

export const pageQuery = graphql`
    query {
        Horror_1: file(relativePath: { eq: "Horror_1.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Horror_2: file(relativePath: { eq: "Horror_2.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        comeintome1: file(relativePath: { eq: "comeintome1.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        comeintome2: file(relativePath: { eq: "comeintome2.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        clowns: file(relativePath: { eq: "Clowns.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kk1: file(relativePath: { eq: "kloss1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kk2: file(relativePath: { eq: "kloss2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kk3: file(relativePath: { eq: "kloss3.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kk4: file(relativePath: { eq: "kloss4.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }


    }
`;
