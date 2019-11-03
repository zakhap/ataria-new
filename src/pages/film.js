import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/all.scss"
import styles from "../components/filmStyles.module.scss"

const FilmPage = ({data}) => (
    <Layout >
        <SEO title="Film" />

        <main className={styles.wrapper}>
            <section id={styles.head}>
                <h2 id={styles.headTitle} className={styles.h1}><span>F I L M + C I N E M A</span></h2>
            </section>

            <section id={styles.haxan}>
                <h2 id={styles.hTitle} className={styles.h2}>HAXAN</h2>
                <p id={styles.hDesc} className={styles.p}>A young girl, asleep, is tied to a chair in a
                    black abyss. When she wakes up, she decomposes at the
                    mercy of a witch.  Directed by <a href="https://www.mikefontainestudio.com/hax/">Mike Fontaine</a>, premiered
                    at <a href="https://sitgesfilmfestival.com/eng/film?id=10005589">Sitges Film Festival 2018</a> and screened at thirteen other
                    festivals in North America and Europe.</p>
                <Img fluid={data.haxan.childImageSharp.fluid} alt="" className={styles.hImg} critial="true" />
            </section>


             <section id={styles.uSonu}>
                <h2 id={styles.sTitle} className={styles.h2} >U SONU</h2>
                <p id={styles.sDesc} className={styles.p}>A short documentary exploring the folk music and religion in
                    Calabria, southern Italy. Following Alessandra Belloni, a
                    folk artist and tambourine player who collaborated with Fellini.</p>
                <Img fluid={data.usonu1.childImageSharp.fluid} alt="" className={styles.sonu1} />
                <Img fluid={data.usonu2.childImageSharp.fluid} alt="" className={styles.sonu2} />
                <Img fluid={data.usonu3.childImageSharp.fluid} alt="" className={styles.sonu3} />

            </section>


        </main>
    </Layout>
)

export default FilmPage


export const pageQuery = graphql`
    query {
        haxan: file(relativePath: { eq: "haxan.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        usonu1: file(relativePath: { eq: "usonu1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        usonu2: file(relativePath: { eq: "usonu2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        usonu3: file(relativePath: { eq: "usonu3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }



    }
`;
