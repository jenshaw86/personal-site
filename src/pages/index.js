import React from "react";
import Layout from '../components/layout/layout';
import IconButton from '../components/iconButton';

const IndexPage = () => (
  <Layout left='contact' right='about'>
    <h1>Jenny Shaw</h1>
    <p>Full-Stack Web Developer</p>
    <IconButton icon='linkedin' />
    <IconButton icon='github' />
    <IconButton icon='twitter' />
  </Layout>
)

export default IndexPage
