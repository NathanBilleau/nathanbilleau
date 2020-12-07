import React, { createRef, useEffect } from "react"
import Lottie from "lottie-web"

import listAnimation from "../animations/list.json"

interface propsType {
  text: string
}

const ListItem = ({ text }: propsType) => {
  const animationContainer = createRef()

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: listAnimation,
    })
  }, [])

  return (
    <li>
      <div ref={animationContainer}></div>
      {text}
    </li>
  )
}

export default ListItem
