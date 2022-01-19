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
  upcoming: boolean
}

const Project = ({ title, excerpt, pic, slug, upcoming }: propsType) => (
    <Link to={slug} aria-label={title}>
      <article className="Project">
        <h2>{title}</h2>
        <div className="contentContainer">
          <Image fluid={pic.childImageSharp.fluid} className="thumbnail" alt={pic.name} />
          <div>
        {
          upcoming && (
            <h3>à venir</h3>
          )
        }
          {excerpt}</div>
        </div>
     </article>
    </Link>
)

export default Project
