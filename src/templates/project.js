import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import React from "react";

import Alink from "../components/Alink";
import ListItem from "../components/ListItem";
import SEO from "../components/seo";

import { StateTag } from '../components/Tag';
import "../styles/project.scss";

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark;
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <SEO title={project.frontmatter.title} description={project.excerpt} image={project.frontmatter.pics[0].publicURL} url={url} />
      <main>

        <Link to="/" className="back">retour</Link>
        <div className="projectContainer">
          <div className="descriptionContainer">
            <h1>{project.frontmatter.title}</h1>
            <StateTag state={project.frontmatter.state} />
            {
              project.frontmatter.state === 'upcoming' && (
                <h2 className="upcoming">à venir</h2>
              )
            }
            <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
            <ul>
              {project.frontmatter.technos.map(tech => (
                <ListItem key={tech} text={tech} />
              ))}
            </ul>
          </div>

          <div className="picsContainer">
            {project.frontmatter.pics.map(pic => (
              <Image key={pic.id} fluid={pic.childImageSharp.fluid} alt={pic.name} />
            ))}
          </div>

          <div className="date">
            <h3>{project.frontmatter.date}</h3>
          </div>

          <div className="projectLink">
            <Alink
              link={project.frontmatter.link}
              text="voir le projet"
              color="white"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectTemplate;

export const data = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMM YYYY", locale: "FR-fr")
        title
        technos
        link
        state
        pics {
          id
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
