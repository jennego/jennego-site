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
              file {
                url
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
              file {
                url
              }
            }
            photoGalleries {
              id
              title
              slug
              albumPhoto {
                file {
                  url
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

  // Get photo galleries from photogroup

  // Find the damn array first. Use photo_group id that is in current photo gallery.
  // const subPhotos = result.allContentfulPhotoGroup.photoGalleries

  // look up current photo gallery - find index in array
  // if not present return empty string
  // if present find prev/next
  // set subPhotosPrev and subPhotosNext in context of PhotoGallery

  const photoGalleryEdges =
    (result.data.allContentfulPhotoGallery || {}).edges || []

  const photoGroups = result.data.allContentfulPhotoGroup.edges

  photoGalleryEdges.forEach((edge, node) => {
    const { id, slug, title } = edge.node
    const path = `/photos/${slug}/`

    // DOES THE NEXT/PREV AND ITS INDEX NEED TO BE IN A SEPARATE FUNCTION?

    createPage({
      path,
      component: require.resolve("./src/templates/photo-gallery.js"),
      context: {
        id,
        title,
        combinedPhotosList,
        photoGroups,
      },
    })
  })
}

async function createPhotoGroupPages(graphql, actions) {
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
            albumPhoto {
              file {
                url
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
              file {
                url
              }
            }
            photoGalleries {
              id
              title
              slug
              albumPhoto {
                file {
                  url
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

  photoEdges.forEach((edge, { node }, index) => {
    const { id, slug, title } = edge.node
    const path = `/photos/${slug}/`

    createPage({
      path,
      component: require.resolve("./src/templates/photo-group.js"),
      context: {
        id,
        title,
        combinedPhotosList,
        // prev: index === 0 ? null : combinedPhotosList[index - 1].node,
        // next:
        //   index === combinedPhotosList.length - 1
        //     ? null
        //     : combinedPhotosList[index + 1].node,
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
