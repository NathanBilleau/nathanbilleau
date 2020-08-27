import React from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
 
import SEO from "../components/seo"
import Alink from "../components/Alink"

import '../styles/project.scss'

const ProjectTemplate = ({data}) => (
    <>
        <SEO title="Project" />
        <main>
            <div className="projectContainer">
                <div className="descriptionContainer">
                    <h1>{data.project.frontmatter.title}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia ligula enim, sit amet egestas ligula pretium non. Nam quam ipsum, imperdiet et mi eu, fringilla hendrerit nisi.</p>
                    <ul>
                        <li>react native</li>
                        <li>firebase</li>
                        <li>the movie database</li>
                    </ul>
                </div>

                <div className="picsContainer">
                    <Image fluid={data.project.frontmatter.pic.childImageSharp.fluid} />
                    <Image fluid={data.project.frontmatter.pic.childImageSharp.fluid} />
                    <Image fluid={data.project.frontmatter.pic.childImageSharp.fluid} />
                    <Image fluid={data.project.frontmatter.pic.childImageSharp.fluid} />
                </div>
                

                <div className="date">
                    <h2>
                        avril 2020
                    </h2>
                </div>

                <div className="projectLink">
                    <Alink link="https://google.com" text="voir le projet" color="white" />
                </div>

            </div>
        </main>
    </>
)

export default ProjectTemplate

export const data = graphql`
{
    project: markdownRemark {
      html
      frontmatter {
        date
        title
        pic {
          childImageSharp {
            fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
`