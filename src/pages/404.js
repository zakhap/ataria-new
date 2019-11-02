import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../components/indexStyles.module.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.fourOhFour}>
        <h1>NOT FOUND</h1>
        <p>We can't find what you're looking for :(</p>
    </div>
  </Layout>
)

export default NotFoundPage
