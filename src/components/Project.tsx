import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const Project = ({title, html, pic, slug}) => (
    <Link to={slug}>
        <div className="Project">
            <h3>{title}</h3>
            <div className="contentContainer">
                <Image fluid={pic.childImageSharp.fluid} className="thumbnail"/>
                <div dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        </div>
    </Link>
    
)

export default Project