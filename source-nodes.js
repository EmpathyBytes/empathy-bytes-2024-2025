import { fetchGraphQL } from "./utils"

export const sourceNodes = async gatsbyApi => {
  const { data } = await fetchGraphQL(
    `https://www.empathybytes.library.gatech.edu`,
    `query FetchApi {
    posts {
      id
      slug
      title
      image {
        url
        alt
        width
        height
      }
      author
    }
    authors {
      id
      name
    }
  }
  `
  )
}