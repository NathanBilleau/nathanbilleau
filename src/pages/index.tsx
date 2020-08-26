import React from "react"
import { Link } from "gatsby"
import "../styles/global.scss"

import SEO from "../components/seo"
import Alink from '../components/Alink'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="container">

      <div className="gridItem left white">
        <h1>Nathan Billeau</h1>
        <p>étudiant, autodidacte, développeur front-end</p>
        <Alink link="mailto:nbilleau@gmail.com" text="me contacter" color="black" /> 
      </div>

      <div className="gridItem right black">

      </div>
      
    </div>
  </>
)

export default IndexPage
