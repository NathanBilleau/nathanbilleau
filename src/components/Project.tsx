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
    <Link to={slug}>
      <article className="Project">
        <h1>{title}</h1>
        <div className="contentContainer">
          <Image fluid={pic.childImageSharp.fluid} className="thumbnail" alt={pic.name} />
          <div>{excerpt}</div>
        </div>
     </article>
    </Link>
)

export default Project
