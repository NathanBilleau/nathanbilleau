/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="umami-analytics"
      defer
      src="https://umami.nathanbilleau.fr/script.js"
      data-website-id="c5bc0eda-2c6f-4960-a3f5-9b0da7d38977"
    />,
  ])
}
