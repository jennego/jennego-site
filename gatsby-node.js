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
            createdAt
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const photoEdges = (result.data.allContentfulPhotoGallery || {}).edges || []

  photoEdges.forEach((edge, index) => {
    const { id, slug, title } = edge.node
    const path = `/photos/${slug}/`

    createPage({
      path,
      component: require.resolve("./src/templates/photo-gallery.js"),
      context: {
        id,
        title,
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

async function createBasicPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulPages {
        edges {
          node {
            id
            title
            slug
            createdAt
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allContentfulPages || {}).edges || []

  pageEdges.forEach((edge, index) => {
    const { id, slug, title } = edge.node
    const path = `/${slug}/`

    createPage({
      path,
      component: require.resolve("./src/templates/basic-page.js"),
      context: {
        id,
        title,
      },
    })
  })
}

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
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createPhotoPages(graphql, actions)
  await createPhotoGroupPages(graphql, actions)
  await createBasicPages(graphql, actions)
  await createBlogPosts(graphql, actions)
}
