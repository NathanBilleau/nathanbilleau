import React from "react"

const Alink = ({ link, text, color }) => (
  <a
    href={link}
    className={`Alink ${color}`}
    target="_blank"
    rel="noreferrer noopener"
  >
    {text}
  </a>
)

export default Alink
