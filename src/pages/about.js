import React from "react"
import Layout from "../components/layout"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SocialMedia from "../components/socialmedia"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAboutPage {
        id
        title
        singleImage {
          fluid(maxWidth: 700) {
            ...GatsbyContentfulFluid
          }
        }
        singleImage2 {
          fluid(maxWidth: 700) {
            ...GatsbyContentfulFluid
          }
        }
        body {
          json
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="display-2">{data.contentfulAboutPage.title}</h1>
        <div className="image-float-right">
          <Img fluid={data.contentfulAboutPage.singleImage.fluid}></Img>
        </div>
        <div className="image-float-right">
          <Img fluid={data.contentfulAboutPage.singleImage2.fluid}></Img>
        </div>
        {documentToReactComponents(data.contentfulAboutPage.body.json)}
      </div>
      <SocialMedia></SocialMedia>
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
