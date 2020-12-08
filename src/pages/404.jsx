import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import "../styles/project.scss"

const NotFoundPage = () => (
  <>
  <SEO title="404" />
  <main>

    <Link to="/" className="back">retour</Link>
    <div className="projectContainer">
      <div className="descriptionContainer">
        <h1>404</h1>
        <div>
          <p>
            La page que vous demandez n'existe pas.
          </p>
        </div>
      
      </div>

    </div>
  </main>
  </>
)

export default NotFoundPage
