// import React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { GatsbyImage } from "gatsby-plugin-image";

// const SecondPage = () => {
//   const data = useStaticQuery(graphql`{
//   file(name: {eq: "backyardsky"}) {
//     name
//     childImageSharp {
//       gatsbyImageData(layout: FULL_WIDTH)
//       fixed {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// }
// `)
//   return (
//     <Layout>
//       <SEO title="Page two" />
//       <h1>Hello from the second page</h1>
//       <p>Welcome to page 2</p>
//       <Link to="/">Go back to the homepage</Link>
//       <div style={{ maxWidth: "800px" }}>
//         <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} className="img-fluid" />
//       </div>
//       <h2>Fixed</h2>
//       <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
//     </Layout>
//   );
// }

// export default SecondPage
