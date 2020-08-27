import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import "../styles/index.scss"

import SEO from "../components/seo"
import Alink from '../components/Alink'
import Project from '../components/Project'

const IndexPage = ({data}) => {
  const projects = data.projects
  const [currentProject, setCurrentProject] = useState({
    number: 1,
    link: 'spelfilm'
  })

  useEffect(() => {
      let height = window.innerHeight
      window.addEventListener('resize', () => {
        height = window.innerHeight
      })

      
      window.addEventListener('scroll', () => {
        let i = Math.round((window.scrollY + 100) / height)

          setCurrentProject({
            number: i + 1,
            link: projects.edges[i].node.fields.slug
          })

      })
  }, [])

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
              <Project key={project.node.id} slug={project.node.fields.slug} pic={project.node.frontmatter.pics[0]} title={project.node.frontmatter.title} html={project.node.html}/>
            ))
          }
          <div className="pagination">
            <span>{currentProject.number < 10 ? `0${currentProject.number}` : currentProject.number}</span>
            <span>/{projects.edges.length < 10 ? `0${projects.edges.length}` : projects.edges.length}</span>
          </div>
          <Link to={currentProject.link} className="readMore">+   En savoir plus</Link>
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
        fields {
          slug
        }
        frontmatter {
          date
          title
          pics {
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