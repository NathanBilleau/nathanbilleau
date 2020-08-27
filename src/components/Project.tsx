import React from 'react'
import Image from 'gatsby-image'

const Project = ({title, html, pic}) => (
    <div className="Project">
        <h3>{title}</h3>
        <div className="contentContainer">
            <Image fluid={pic.childImageSharp.fluid} className="thumbnail"/>
            <div dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    </div>
)

export default Project