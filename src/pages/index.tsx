import { graphql, Link } from "gatsby";
import Lottie from "lottie-web";
import React, { createRef, useEffect, useState } from "react";
import readMoreAnimation from "../animations/data.json";
import "../styles/index.scss";

import Alink from "../components/Alink";
import Project from "../components/Project";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const projects = data.projects
  const [currentProject, setCurrentProject] = useState({
    number: 1,
    link: projects.edges[0].node.fields.slug,
  })

  const readMoreAnimationContainer = createRef()

  useEffect(() => {
    let height = window.innerHeight
    window.addEventListener("resize", () => {
      height = window.innerHeight
    })

    window.addEventListener("scroll", () => {
      let i = Math.round((window.scrollY + 100) / height)

      if (window.innerWidth <= 700) {
        i = Math.round((window.scrollY - 0.85 * height + 50) / height)

        if (i === -1) {
          i = 0
        } else {
          i = Math.abs(i)
        }
      }

      setCurrentProject({
        number: i + 1,
        link: projects.edges[i].node.fields.slug,
      })
    })

    Lottie.loadAnimation({
      container: readMoreAnimationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: readMoreAnimation,
    })
  }, [])

  return (
    <>
      <SEO title="Home" description="Développeur full-stack" lang="fr" />
      <div className="container">
        <div className="gridItem white">
          <div className="presentation">
            <h1>
              Nathan
              <br />
              Billeau
            </h1>
            <p>Développeur full-stack</p>
            <div className="linksContainer">
              <Alink
                link="mailto:nbilleau@gmail.com"
                text="nbilleau@gmail.com"
                color="black"
              />

              <Alink
                link="/cv.pdf"
                color='black'
                text="cv"
              />
            </div>
          </div>
        </div>

        <div className="gridItem black">
          <div className="projectsContainer">
            {projects.edges.map(project => (
              <Project
                key={project.node.id}
                slug={project.node.fields.slug}
                pic={project.node.frontmatter.pics[0]}
                title={project.node.frontmatter.title}
                excerpt={project.node.excerpt}
                state={project.node.frontmatter.state}
              />
            ))}
            <div className="pagination">
              <span>
                {currentProject.number < 10
                  ? `0${currentProject.number}`
                  : currentProject.number}
              </span>
              <span>
                /
                {projects.edges.length < 10
                  ? `0${projects.edges.length}`
                  : projects.edges.length}
              </span>
            </div>
            <Link to={currentProject.link} className="readMore">
              <div
                className="readMoreAnimation"
                id="readMore"
                ref={readMoreAnimationContainer}
              ></div>{" "}
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const data = graphql`
  {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: { frontmatter: { state: { ne: "hidden" }}}) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            state
            pics {
              name
              relativePath
              childImageSharp {
                fluid(maxWidth: 500) {
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
