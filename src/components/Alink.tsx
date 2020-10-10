import React from "react"

interface propsType {
  link: string
  color: "black" | "white"
  text: string
}

const Alink = ({ link, text, color }: propsType) => (
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
