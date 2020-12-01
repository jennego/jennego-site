import React from "react"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>I am a web developer, equestrian and geek.</p>

      <p>
        {" "}
        I am also a female, on the spectrum, an Asian and I still manage to be
        terrible at math.{" "}
      </p>
      <p>
        You can find me on these platforms to varying degrees of participation
      </p>

      <h1> SOCIAL MEDIA </h1>
      <h1>Contact info?</h1>
    </div>
  )
}

// import Parallax from "parallax-js"
// import React, { useEffect, useRef } from "react"
// import bg from "../images/backyardsky-bg.jpg"
// import fg from "../images/backyardsky-fg.png"
// const ParallaxComponent = () => {
//   const sceneEl = useRef(null)

//   useEffect(() => {
//     const parallaxInstance = new Parallax(sceneEl.current, {
//       relativeInput: true,
//       clipRelativeInput: true,
//     })

//     parallaxInstance.enable()

//     return () => parallaxInstance.disable()
//   }, [])

//   return (
//     <div ref={sceneEl}>
//       <div data-depth="0.1" style={{ maxHeight: "600px" }}>
//         <img src={bg} />
//       </div>
//       <div data-depth="0.2" style={{ paddingTop: "200px" }}>
//         <img src={fg} />{" "}
//       </div>
//     </div>
//   )
// }

// export default ParallaxComponent
