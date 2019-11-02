import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Header from "../components/header"

import "../components/all.scss"
import styles from "../components/comStyles.module.scss"

const CommercialPage = ({data}) => (
    <Layout>
        <SEO title="About" />

        <main className={styles.main}>
                <section className={styles.head}>
                    <h1 className={styles.headTitle + " " + styles.h1}><span>F A S H I O N x B E A U T Y x C O M M E R C I A L</span></h1>
                    <p className={styles.headDescription  + " " + styles.p}>We believe creativity and strategy go hand in hand, and bring this mindset to our commercial and fashion work. We draw from a youthful network that executes to push brands forward and expand their access to latent markets.</p>
                </section>

                <section className={styles.heronPreston}>
                    <h2 className={styles.hpTitle + " " + styles.h2}>HERON PRESTON x UGG</h2>
                    <p className={styles.hpDescription  + " " + styles.p}>Heron Preston and UGG collaboration photo and video campaign.</p>
                    <Img fluid={data.hp1.childImageSharp.fluid} className={styles.hp1 + ' ' + styles.landscape} alt="" />
                    <Img fluid={data.hp2.childImageSharp.fluid} className={styles.hp2 + ' ' + styles.landscape} alt="" />
                    <Img fluid={data.hp3.childImageSharp.fluid} className={styles.hp3 + ' ' + styles.landscape} alt="" />
                    <Img fluid={data.hp4.childImageSharp.fluid} className={styles.hp4 + ' ' + styles.landscape} alt="" />
                    <Img fluid={data.hp5.childImageSharp.fluid} className={styles.hp5 + ' ' + styles.landscape} alt="" />
                </section>

                <section className={styles.karlieKloss}>
                    <h2 className={styles.kkTitle + " " + styles.h2}>KARLIE KLOSS x CAROLINA HERRERA</h2>
                    <p className={styles.kkDescription  + " " + styles.p}>Good Girl perfume campaign social media content shot by Ataria DP Daniel Contaldo.</p>
                    <Img fluid={data.kk1.childImageSharp.fluid} className={styles.kk1 + ' ' + styles.landscape} alt="" />
                    <Img fluid={data.kk2.childImageSharp.fluid} className={styles.kk2 + ' ' + styles.landscape} alt="" />
                    <Img fluid={data.kk3.childImageSharp.fluid} className={styles.kk3 + ' ' + styles.landscape} alt="" />
                    <Img fluid={data.kk4.childImageSharp.fluid} className={styles.kk4 + ' ' + styles.landscape} alt="" />
                </section>
        </main>
    </Layout>
)

export default CommercialPage


                // <Img fluid={data.hannahImg.childImageSharp.fluid}
                //     className=''
                //     alt='Hannah!'/>

export const pageQuery = graphql`
    query {
        hp1: file(relativePath: { eq: "hp1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hp2: file(relativePath: { eq: "hp2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hp3: file(relativePath: { eq: "hp3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hp4: file(relativePath: { eq: "hp4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hp5: file(relativePath: { eq: "hp5.jpg" }) {
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
