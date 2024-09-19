import { Link } from "gatsby";
import Image, { FluidObject } from "gatsby-image";
import React from "react";
import { State, StateTag } from "./Tag";

interface propsType {
  title: string;
  excerpt: string;
  pic: {
    childImageSharp: {
      fluid: FluidObject;
    },
    name: string;
  };
  slug: string;
  state: State;
}

const Project = ({ title, excerpt, pic, slug, state }: propsType) => (
  <Link to={slug} aria-label={title}>
    <article className="Project">
      <h2>{title}</h2>
      <div className="contentContainer">
        <Image fluid={pic.childImageSharp.fluid} className="thumbnail" alt={pic.name} />
        <div>
          <StateTag state={state} />
          {excerpt}
        </div>
      </div>
    </article>
  </Link>
);

export default Project;
