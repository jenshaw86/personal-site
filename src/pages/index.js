import React from "react"
import Layout from '../components/layout/layout'
import NavArrows from '../components/navigation/navArrows'

const IndexPage = () => (
  <Layout>
    <NavArrows left='contact' right='about'>
      <h1>Jenny Shaw</h1>
      <p>Full-Stack Web Developer</p>
      <ul>
        <li>LinkedIn</li>
        <li>GitHub</li>
        <li>Twitter</li>
      </ul>
    </NavArrows>
  </Layout>
)

export default IndexPage
