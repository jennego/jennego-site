import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="display-2">About Me</h1>
        <p>
          {" "}
          My name is Jennifer but I declared myself Jennego at age 3, not
          knowing how useful it would be online but there must be an entire city
          of Jennifers out there.
        </p>
        <p>
          I am a web developer, equestrian and geek. I love purple, ponies,
          photography and programming (well, okay mostly JavaScript).
        </p>
        <p>
          I am also a female, on the spectrum, an Asian-Canadian and I still
          manage to be terrible at math. So take that as you will.
        </p>
        <p>
          {" "}
          Born and raised in Vancouver, BC - I moved in 2018 and currently live
          on Vancouver Island.
        </p>
        <p>
          {" "}
          I have an English degree from SFU and am a CodeCore Bootcamp graduate.
        </p>
        <p>
          {" "}
          I have half lease a horse, I attempt to dressage about (no, the horse
          does not do all the work), research random things and sometimes, I
          make things. Not like physical things. Have you've seen me try to bead
          or sew? Terrible. I make virtual things.
        </p>
        <p>
          You can find me on these platforms to varying degrees of participation
        </p>

        <h1> SOCIAL MEDIA </h1>
        <h1>Contact info?</h1>
      </div>
    </Layout>
  )
}

export default AboutPage

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
