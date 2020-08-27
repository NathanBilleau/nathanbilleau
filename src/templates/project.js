import React from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
 
import SEO from "../components/seo"
import Alink from "../components/Alink"

import '../styles/project.scss'



const ProjectTemplate = ({data}) => {
    const project = data.markdownRemark
    return (
    <>
        <SEO title="Project" />
        <main>
            <div className="projectContainer">
                <div className="descriptionContainer">
                    <h1>{project.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: project.html}}></div>
                    <ul>
                        {
                            project.frontmatter.technos.map(tech => (
                                <li>{tech}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="picsContainer">
                    {
                        project.frontmatter.pics.map(pic => (
                            <Image fluid={pic.childImageSharp.fluid} />
                        ))
                    }
                </div>
                

                <div className="date">
                    <h2>
                        {project.frontmatter.date}
                    </h2>
                </div>

                <div className="projectLink">
                    <Alink link={project.frontmatter.link} text="voir le projet" color="white" />
                </div>

            </div>
        </main>
    </>
)}

export default ProjectTemplate


export const data = graphql` 
query($slug: String!) {
    markdownRemark (fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            date (formatString: "MMMM YYYY", locale: "FR-fr")
            title
            technos
            link
            pics {
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