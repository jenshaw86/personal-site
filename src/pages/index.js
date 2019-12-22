import React from "react"
import Layout from '../components/layout/layout'
import NavButton from '../components/navigation/navButton'

const IndexPage = () => (
  <Layout>
    <NavButton dir='left' page='contact'/>
    {/* <Link to='contact'>
      <Button animated>
        <Button.Content visible>
          <Icon name='arrow left' />
        </Button.Content>
        <Button.Content hidden>Contact</Button.Content>
      </Button>
    </Link> */}
    <h1>Jenny Shaw</h1>
    <p>Full-Stack Web Developer</p>
    <ul>
      <li>LinkedIn</li>
      <li>GitHub</li>
      <li>Twitter</li>
    </ul>
    <NavButton dir='right' page='about'/>
  </Layout>
)

export default IndexPage
