import { useStaticQuery,graphql } from "gatsby";

export default () => useStaticQuery(
    graphql`
query MyQuery {
  allPrismicPost {
    nodes {
      data {
        title {
          text
        }
        image {
          url,
          alt
        }
      }
    }
  }
}`
)