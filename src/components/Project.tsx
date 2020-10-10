import React from "react"
import Image, { FluidObject } from "gatsby-image"
import { Link } from "gatsby"

interface propsType {
  title: string
  excerpt: string
  pic: {
    childImageSharp:{
      fluid: FluidObject
    },
    name: string
  }
  slug: string
}

const Project = ({ title, excerpt, pic, slug }: propsType) => (
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
