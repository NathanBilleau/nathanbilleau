import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/index.scss"

import SEO from "../components/seo"
import Alink from '../components/Alink'
import Project from '../components/Project'

const IndexPage = ({data}) => {
  const projects = data.projects

  return (
  <>
    <SEO title="Home" />
    <div className="container">

      <div className="gridItem white">
        <div className="presentation">
          <h1>Nathan<br />Billeau</h1>
          <h2>étudiant, autodidacte, développeur front-end</h2>
          <Alink link="mailto:nbilleau@gmail.com" text="me contacter" color="black" /> 
        </div>
      </div>

      <div className="gridItem black">
        <div className="projectsContainer">
          {
            projects.edges.map(project => (
              <Project key={project.node.id} pic={project.node.frontmatter.pic} title={project.node.frontmatter.title} html={project.node.html}/>
            ))
          }
          <div className="pagination">
            <span>01</span>
            <span>/0{projects.edges.length}</span>
          </div>
          <Link to="project" className="readMore">+   En savoir plus</Link>
        </div>
      </div>
      
    </div>
  </>
)}

export default IndexPage


export const data = graphql`
{
  projects: allMarkdownRemark {
    edges {
      node {
        id
        html
        frontmatter {
          date
          title
          pic {
              relativePath
              childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }

              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
}


`