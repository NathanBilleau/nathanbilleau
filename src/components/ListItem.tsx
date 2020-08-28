import React, { createRef, useEffect } from "react"
import Lottie from "lottie-web"

import listAnimation from "../animations/list.json"

const ListItem = ({ text }) => {
  const animationContainer = createRef()

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      render: "svg",
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
