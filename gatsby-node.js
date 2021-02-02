/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createPhotoPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulPhotoGallery {
        edges {
          node {
            id
            title
            slug
            updatedAt
            photo_group {
              id
            }
            albumPhoto {
              sizes {
                src
              }
            }
          }
        }
      }
      allContentfulPhotoGroup {
        edges {
          node {
            title
            slug
            id
            updatedAt
            groupCoverPhoto {
              id
              sizes {
                src
              }
            }
            photoGalleries {
              title
              albumPhoto {
                sizes {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const photoEdges = (result.data.allContentfulPhotoGroup || {}).edges || []

  // filter out photo galleries with photo group if !== null

  let filteredPhotoGalleries = result.data.allContentfulPhotoGallery.edges.filter(
    ({ node }) => node.photo_group == null
  )
  // combine photo groups and photo galleries into a single array

  const combinedPhotosList = []
    .concat(filteredPhotoGalleries, result.data.allContentfulPhotoGroup.edges)
    .sort(function (a, b) {
      a.node.date - b.node.date
    })

  // order by last updated date
  // THIS MAY NOT WORK. TEST with more data!

  const photoGalleryEdges =
    (result.data.allContentfulPhotoGallery || {}).edges || []

  photoGalleryEdges.forEach((edge, index) => {
    const { id, slug, title } = edge.node
    const path = `/photos/${slug}/`

    createPage({
      path,
      component: require.resolve("./src/templates/photo-gallery.js"),
      context: {
        id,
        title,
        combinedPhotosList,
        prev: index === 0 ? null : combinedPhotosList[index - 1].node,
        next:
          index === combinedPhotosList.length - 1
            ? null
            : combinedPhotosList[index + 1].node,
      },
    })
  })
}

async function createPhotoGroupPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulPhotoGroup {
        edges {
          node {
            slug
            title
            id
            photoGalleries {
              id
              slug
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const photoEdges = (result.data.allContentfulPhotoGroup || {}).edges || []

  photoEdges.forEach((edge, index) => {
    const { id, slug, title } = edge.node
    const path = `/photos/${slug}/`

    createPage({
      path,
      component: require.resolve("./src/templates/photo-group.js"),
      context: {
        id,
        title,
      },
    })
  })
}

// async function createBasicPages(graphql, actions) {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allContentfulPages {
//         edges {
//           node {
//             id
//             title
//             slug
//             createdAt
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) throw result.errors

//   const pageEdges = (result.data.allContentfulPages || {}).edges || []

//   pageEdges.forEach((edge, index) => {
//     const { id, slug, title } = edge.node
//     const path = `/${slug}/`

//     createPage({
//       path,
//       component: require.resolve("./src/templates/basic-page.js"),
//       context: {
//         id,
//         title,
//       },
//     })
//   })
// }

async function createBlogPosts(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            wordpress_id
            slug
            title
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allWordpressPost || {}).edges || []

  pageEdges.forEach((edge, index) => {
    const { id, slug, title } = edge.node
    const path = `/blog/${slug}/`

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        id,
        title,
        prev: index === 0 ? null : pageEdges[index - 1].node,
        next: index === pageEdges.length - 1 ? null : pageEdges[index + 1].node,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createPhotoPages(graphql, actions)
  await createPhotoGroupPages(graphql, actions)
  // await createBasicPages(graphql, actions)
  await createBlogPosts(graphql, actions)
}
