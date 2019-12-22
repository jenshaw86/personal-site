import React from "react"
import Layout from '../components/layout/layout'

const IndexPage = () => (
  <Layout left='contact' right='about'>
    <h1>Jenny Shaw</h1>
    <p>Full-Stack Web Developer</p>
    <ul>
      <li>LinkedIn</li>
      <li>GitHub</li>
      <li>Twitter</li>
    </ul>
  </Layout>
)

export default IndexPage
