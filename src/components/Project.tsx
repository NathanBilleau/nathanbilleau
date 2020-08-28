import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Project = ({ title, excerpt, pic, slug }) => (
    <div className="Project">
      <Link to={slug}>
        <h3>{title}</h3>
      </Link>
      <div className="contentContainer">
        <Image fluid={pic.childImageSharp.fluid} className="thumbnail" alt={pic.name} />
        <div>{excerpt}</div>
      </div>
    </div>
)

export default Project
